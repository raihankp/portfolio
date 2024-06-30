"use client";

import React, { useEffect, useState } from "react";

interface box {
  value: number;
  height: number;
  color: string;
}

const SortingVisualizerPage = () => {
  const [array, setArray] = useState<box[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // 1000 ms = 1 s
  // source: https://stackoverflow.com/a/44476626
  const timer = () => new Promise((res) => setTimeout(res, 10));

  const generateArray = () => {
    setArray([]);
    // for (let i = 0; i < 50; i++) {
    //   const randomValue = Math.floor(Math.random() * 100) + 10;
    //   const newBox: box = { value: randomValue, height: randomValue * 5, color: "blue" };
    //   setArray((prev) => [...prev, newBox]);
    // }

    const uniqueValues = new Set();
    const newArray: box[] = [];

    // CHANGE THE SIZE TO MAKE THE ARRAY BIGGER
    while (uniqueValues.size < 75) {
      const randomValue = Math.floor(Math.random() * 100) + 10;
      if (!uniqueValues.has(randomValue)) {
        uniqueValues.add(randomValue);
        const newBox: box = { value: randomValue, height: randomValue * 5, color: "blue" };
        newArray.push(newBox);
      }
    }
    setArray((prev) => [...newArray]);
  };

  useEffect(() => {
    generateArray();
  }, []);

  const bubbleSort = async () => {
    setIsLoading(true);

    const length = array.length;
    let arrayHelper = [...array]; // clone the array
    let swapped;

    for (let i = 0; i < length - 1; i++) {
      let j = 0;
      for (j; j < length - 1 - i; j++) {
        // Change the color when compare
        arrayHelper[j].color = "yellow";
        arrayHelper[j + 1].color = "yellow";
        setArray((prev) => [...arrayHelper]);
        await timer();
        if (arrayHelper[j].value > arrayHelper[j + 1].value) {
          // SWAP
          const boxTemp: box = arrayHelper[j];
          arrayHelper[j] = arrayHelper[j + 1];
          arrayHelper[j + 1] = boxTemp;

          // Change the compared box color after swapped
          arrayHelper[j].color = "green";
          arrayHelper[j + 1].color = "green";
          setArray((prev) => [...arrayHelper]);
          await timer();
        }

        // Change the compared box color to the original
        arrayHelper[j].color = "blue";
        arrayHelper[j + 1].color = "blue";
        setArray((prev) => [...arrayHelper]);
      }

      // Set the last to turquoise
      arrayHelper[j].color = "turquoise";
      setArray((prev) => [...arrayHelper]);
      await timer();
    }
    // Set the first to turquoise because it didnt get in the loop
    arrayHelper[0].color = "turquoise";
    setArray((prev) => [...arrayHelper]);
    await timer();

    // for (let i = 0; i < arrayHelper.length; i++) {
    //     arrayHelper[i].color = "turquoise"
    //     setArray((prev) => [...arrayHelper]);
    //     await timer()
    // }

    console.log("HASIL AKHIR:", arrayHelper);
    setIsLoading(false);
  };

  const insertionSort = async () => {
    setIsLoading(true);

    const length = array.length;
    let arrayHelper = [...array]; // clone the array

    // Set the first to turquoise because it might not changed in the loop if this not included
    arrayHelper[0].color = "turquoise";
    setArray((prev) => [...arrayHelper]);

    for (let i = 1; i < length; i++) {
      let key: box = arrayHelper[i];
      let iForLoop = i;
      let j = i - 1;
      key.color = "purple";
      setArray((prev) => [...arrayHelper]);
      await timer();

      while (j >= 0 && arrayHelper[iForLoop].value < arrayHelper[j].value) {
        // Change the compared box color when satisfy the condition
        arrayHelper[iForLoop].color = "yellow";
        arrayHelper[j].color = "yellow";
        setArray((prev) => [...arrayHelper]);
        await timer();

        // SWAP
        const boxTemp: box = arrayHelper[j];
        arrayHelper[j] = arrayHelper[iForLoop];
        arrayHelper[iForLoop] = boxTemp;

        // Change the compared box color after swapped
        arrayHelper[iForLoop].color = "green";
        arrayHelper[j].color = "green";
        setArray((prev) => [...arrayHelper]);
        await timer();

        // Change the compared box color to final
        arrayHelper[iForLoop].color = "turquoise";
        arrayHelper[j].color = "turquoise";
        setArray((prev) => [...arrayHelper]);
        // await timer();

        // Update index
        iForLoop = j;
        j = j - 1;
      }
      arrayHelper[j + 1] = key;

      key.color = "turquoise";
      setArray((prev) => [...arrayHelper]);
      //   await timer()
    }

    setIsLoading(false);
  };

  const selectionSort = async () => {
    setIsLoading(true);

    const length = array.length;
    let arrayHelper = [...array]; // clone the array

    for (let i = 0; i < length - 1; i++) {
      let minValueIndex = i;
      arrayHelper[i].color = "yellow"; // Set color of the index that will be compared

      // loop the remaning array
      for (let j = i + 1; j < length; j++) {
        // set the color before to blue again bcs it was yellow if not the minimum
        if (j - 1 !== i && minValueIndex !== j - 1) {
          arrayHelper[j - 1].color = "blue";
        }

        // Check minimum value and change the index if it is the minimum
        if (arrayHelper[j].value < arrayHelper[minValueIndex].value) {
          // set the prev minValueIndex color to be blue again
          arrayHelper[minValueIndex].color = "blue";

          // set the new minValueIndex and set the color to the new minValueIndex
          minValueIndex = j;
          arrayHelper[minValueIndex].color = "green";
          setArray((prev) => [...arrayHelper]);
          await timer();
          continue; // continue the loop
        }

        // set color to yellow if not satisfy the condition above
        arrayHelper[j].color = "yellow";
        setArray((prev) => [...arrayHelper]);
        await timer();

        // set the last array color to blue again
        if (j == length - 1) {
          arrayHelper[j].color = "blue";
          setArray((prev) => [...arrayHelper]);
          await timer();
        }
        continue; // continue the loop
      }

      // Swap the minimum with i
      const boxTemp: box = arrayHelper[i];
      arrayHelper[i] = arrayHelper[minValueIndex];
      arrayHelper[minValueIndex] = boxTemp;

      // set the minimum array color to turquoise
      arrayHelper[i].color = "turquoise";

      // set the last to turquoise
      if (i === length - 2) {
        arrayHelper[i + 1].color = "turquoise";
      }
      setArray((prev) => [...arrayHelper]);
      await timer();
    }

    setIsLoading(false);
  };

  const quickSort = async () => {
    // PROBLEM:
    // https://stackoverflow.com/questions/54069253/the-usestate-set-method-is-not-reflecting-a-change-immediately
    // The problem, is when logging the arrayPartitionHelper just after call the partition function,
    // the logged array is already partitioned, and if we log again when swapping, the logged array is still the same (already partitioned)
    // Until now, i still dont know why
    
    setIsLoading(true);

    const length = array.length;
    // let arrayHelper = [...array]; // clone the array
    const arrayPartitionHelper = JSON.parse(JSON.stringify(array));
    await quickSortMain(arrayPartitionHelper, 0, length - 1);

    setIsLoading(false);
  };

  const quickSortMain = async (arrayPartitionHelper: box[], low: number, high: number) => {
    console.log("quick sort main func => low:", low, " high:", high);
    if (low < high) {
      // pi is the partitioning index, arr[pi] is now at the right place
      let partitionIndex: number = await partitionQuickSort(arrayPartitionHelper, low, high);
      console.log("main array after partition:", arrayPartitionHelper);

      
      // Separately sort elements before partition and after partition
      await quickSortMain(arrayPartitionHelper, low, partitionIndex - 1);
      await quickSortMain(arrayPartitionHelper, partitionIndex + 1, high);

      // Color the pivot elementafter the subarray is already sorted, meaning this pivot will be in the correct position
      arrayPartitionHelper[partitionIndex].color = "turquoise";
      setArray((prev) => [...arrayPartitionHelper]);
      await timer();
    } else {
      // in this condition, low and high will be either the same, or low is greater than high
      // so, to avoid uncaught (index too big), we will check whether the low is equals the length or not
      // if it satisfy, then we dont need to change the color
      if (low < arrayPartitionHelper.length) {
        console.log("change color to turquoise");
        arrayPartitionHelper[low].color = "turquoise";
        if (high < low && high !== -1) arrayPartitionHelper[high].color = "turquoise";
        setArray((prev) => [...arrayPartitionHelper]);
        await timer();
      }
    }
  };

  const partitionQuickSort = async (arrayPartitionHelper: box[], low: number, high: number) => {
    let swapped: boolean = false;
    console.log("partition quick sort func => low:", low, " high:", high);
    // let arrayPartitionHelper: box[] = JSON.parse(JSON.stringify(array)); // clone the array
    // console.log("early array in partition:", arrayPartitionHelper);

    // choose last value as pivot
    let pivot: box = arrayPartitionHelper[high];
    pivot.color = "purple";
    console.log("pivot:", pivot);

    // Index of smaller element and indicates the right position of pivot found so far
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
      // If current element is smaller than the pivot
      if (arrayPartitionHelper[j].value < pivot.value) {
        // console.log("masuk kan", arrayPartitionHelper[j].value, " ", pivot.value);
        // console.log("array helper before swap:", arrayPartitionHelper);
        
        // Increment index of smaller element
        i++;
        console.log("sebelum => i value:", arrayPartitionHelper[i].value, " j value:", arrayPartitionHelper[j].value);
        arrayPartitionHelper[i].color = "green";
        arrayPartitionHelper[j].color = "yellow";
        setArray((prev) => [...arrayPartitionHelper]);
        await timer();

        [arrayPartitionHelper[i], arrayPartitionHelper[j]] = [arrayPartitionHelper[j], arrayPartitionHelper[i]]; // Swap elements
        swapped = true;
        arrayPartitionHelper[i].color = "green";
        arrayPartitionHelper[j].color = "yellow";
        console.log("sesudah => i value:", arrayPartitionHelper[i].value, " j value:", arrayPartitionHelper[j].value);
        // console.log("array helper after swap:", arrayPartitionHelper);
        setArray((prev) => [...arrayPartitionHelper]);
        await timer();

        arrayPartitionHelper[i].color = "blue";
        arrayPartitionHelper[j].color = "blue";
        setArray((prev) => [...arrayPartitionHelper]);
        continue;
      }
      arrayPartitionHelper[j].color = "yellow";
      setArray((prev) => [...arrayPartitionHelper]);
      await timer();

      arrayPartitionHelper[j].color = "blue";
      setArray((prev) => [...arrayPartitionHelper]);
    }
    [arrayPartitionHelper[i + 1], arrayPartitionHelper[high]] = [arrayPartitionHelper[high], arrayPartitionHelper[i + 1]]; // Swap pivot to its correct position

    pivot.color = "blue";
    setArray((prev) => [...arrayPartitionHelper]);
    await timer();
    return i + 1; // Return the partition index
  };

  return (
    <div className="flex flex-col border-0 border-gray-600 items-center gap-6 py-8 md:px-16 rounded-2xl" id="sortingpage">
      <h1 className="text-4xl font-bold">Sorting Visualization</h1>
      <div className="flex flex-col border-0 gap-8 md:px-32 items-center">
        <div className="flex flex-row flex-wrap gap-2 justify-center">
          <button onClick={generateArray} className="bg-white text-black py-1 px-4 rounded-lg" disabled={isLoading}>
            Generate New Array!
          </button>
          <button onClick={bubbleSort} className="bg-green-500 text-white px-4 rounded-lg" disabled={isLoading}>
            Start Bubble Sort
          </button>
          <button onClick={insertionSort} className="bg-green-500 text-white px-4 rounded-lg" disabled={isLoading}>
            Start Insertion Sort
          </button>
          <button onClick={selectionSort} className="bg-green-500 text-white px-4 rounded-lg" disabled={isLoading}>
            Start Selection Sort
          </button>
          <button onClick={quickSort} className="bg-green-500 text-white px-4 rounded-lg" disabled={isLoading}>
            Start Quick Sort
          </button>
        </div>
        <div className="flex flex-rows gap-1">
          {array.map((box) => (
            <div key={Math.random()} className="w-fit p-1" style={{ backgroundColor: box.color, height: box.height }}>
              {/* {box.value} */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SortingVisualizerPage;
