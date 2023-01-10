import React from 'react';
//import {getMergeSortAnimations} from '../sortingAlgorithms/testSortingAlgorithms';
import './SortingVisualizer.css';

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

export default class SortingVisualizer extends React.Component {

    // the constructor
    constructor(props) {
      super(props);
  
      this.state = {
        array: [],
      };
    }
    //HTML for rendering
    render() {
        const {array} = this.state;
    
        return (
          <div className="array-container">
            {array.map((value, idx) => (
              <div
                className="array-bar"
                key={idx}
                style={{
                  backgroundColor: PRIMARY_COLOR,
                  height: `${value}px`,
                }}></div>
            ))}
            <button onClick={() => this.resetArray()}>Generate New Array</button>
            <button onClick={() => this.mergeSort()}>Merge Sort</button>
            <button onClick={() => this.quickSort()}>Quick Sort</button>
            <button onClick={() => this.heapSort()}>Heap Sort</button>
            <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
            <button onClick={() => this.testSortingAlgorithms()}>
              Test Sorting Algorithms (BROKEN)
            </button>
          </div>
        );
      }
}