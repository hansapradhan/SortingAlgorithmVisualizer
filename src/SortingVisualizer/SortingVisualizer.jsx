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
      var addBootstrapjs = <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
      // Variable for adding Navbar
      var navbar = this.NavBarHTMLElement();

      //Variable for the rest of the code
      var restofCode = this.TheCodefortheSortingAnimation(array)
    
      return [addBootstrapjs,navbar];
      
      }
      

  TheCodefortheSortingAnimation(array) {
    return <div className="array-container">
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
      <button onClick={() => this.testSortingAlgorithms()}></button>

    </div>;
  }

  NavBarHTMLElement() {
    return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">SortingAlgorithmVisualizer</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
             <a class="nav-link" href="javascript:void(0);" onClick={() => this.mergeSort()}>Merge Sort</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" onClick={() => this.quickSort()}>Quick Sort</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" onClick={() => this.heapSort()}>Heap Sort</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" onClick={() => this.bubbleSort()}>Bubble Sort</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="javascript:void(0);" onClick={() => this.testSortingAlgorithms()}>
                Test Sorting Algorithms (BROKEN)
              </a>
            </li>
            <li class="nav-item" >
              <button class="button-37  btn btn-outline-success pull-right" onClick={() => this.resetArray()}>Generate New Array</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>);
  }
}