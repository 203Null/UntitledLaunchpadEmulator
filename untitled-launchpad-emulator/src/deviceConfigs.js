const deviceConfigs = [
  //Launchpad Pro
  {
    name: "Launchpad Pro",
    
    layout: [
      ["　", "⬤", "⬤", "⬤", "⬤", "⬤", "⬤", "⬤", "⬤", "　"],
      ["⬤", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "⬤"],
      ["⬤", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "⬤"],
      ["⬤", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "⬤"],
      ["⬤", "◻", "◻", "◻", "◪", "⬕", "◻", "◻", "◻", "⬤"],
      ["⬤", "◻", "◻", "◻", "⬔", "◩", "◻", "◻", "◻", "⬤"],
      ["⬤", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "⬤"],
      ["⬤", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "⬤"],
      ["⬤", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "⬤"],
      ["　", "⬤", "⬤", "⬤", "⬤", "⬤", "⬤", "⬤", "⬤", "　"]],

    keymap: [
      [-1, 28, 29, 30, 31, 32, 33, 34, 35, -1],
      [108, 64, 65, 66, 67, 96, 97, 98, 99, 100], 
      [109, 60, 61, 62, 63, 92, 93, 94, 95, 101],
      [110, 56, 57, 58, 59, 88, 89, 90, 91, 102],
      [111, 52, 53, 54, 55, 84, 85, 86, 87, 103],
      [112, 48, 49, 50, 51, 80, 81, 82, 83, 104],
      [113, 44, 45, 46, 47, 76, 77, 78, 79, 105],
      [114, 40, 41, 42, 43, 72, 73, 74, 75, 106],
      [115, 36, 37, 38, 39, 68, 69, 70, 71, 107],
      [-1, 116, 117, 118, 119, 120, 121, 122, 123, -1]],

    //Size of LED since sometimes Key can come without LED. We don't really need them since we can load the size of layout array
    width: 10, 
    height: 10,
    
    canvas_origin: [1,1],

    chainKey: [[9,1], [9,2], [9,3], [9,4], [9,5], [9,6], [9,7], [9,8]],

    mcTable: [
      [1,9], [2,9], [3,9], [4,9], [5,9], [6,9], [7,9], [8,9],
      [9,1], [9,2], [9,3], [9,4], [9,5], [9,6], [9,7], [9,8],
      [8,0], [7,0], [6,0], [5,0], [4,0], [3,0], [2,0], [1,0],
      [0,8], [0,7], [0,6], [0,5], [0,4], [0,3], [0,2], [0,1]],
  },
  //Launchpad MK2
  {
    name: "Launchpad MK2",
    
    layout: [
      ["⬤", "⬤", "⬤", "⬤", "⬤", "⬤", "⬤", "⬤", "　"],
      ["◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "⬤"],
      ["◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "⬤"],
      ["◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "⬤"],
      ["◻", "◻", "◻", "◪", "⬕", "◻", "◻", "◻", "⬤"],
      ["◻", "◻", "◻", "⬔", "◩", "◻", "◻", "◻", "⬤"],
      ["◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "⬤"],
      ["◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "⬤"],
      ["◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "⬤"]],

    keymap: [
      ["C104", "C105", "C106", "C107", "C108", "C109", "C110", "C111", -1],
      [81, 82, 83, 84, 85, 86, 87, 88, 89],  
      [71, 72, 73, 74, 75, 76, 77, 78, 79], 
      [61, 62, 63, 64, 65, 66, 67, 68, 69], 
      [51, 52, 53, 54, 55, 56, 57, 58, 59], 
      [41, 42, 43, 44, 45, 46, 47, 48, 49], 
      [31, 32, 33, 34, 35, 36, 37, 38, 39], 
      [21, 22, 23, 24, 25, 26, 27, 28, 29], 
      [11, 12, 13, 14, 15, 16, 17, 18, 19]],

    width: 9, 
    height: 9,
    
    canvas_origin: [0,1],

    chainKey: [[8,1], [8,2], [8,3], [8,4], [8,5], [8,6], [8,7], [8,8]],

    mcTable: [
      [8,9], [1,9], [2,9], [3,9], [4,9], [5,9], [6,9], [7,9],
      [9,0], [9,1], [9,2], [9,3], [9,4], [9,5], [9,6], [9,7],
      null, null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null,],
  },
  //Launchpad X
  // {
  //   name: "Launchpad X",
    
  //   layout: [
  //     ["◼", "◼", "◼", "◼", "◼", "◼", "◼", "◼", "◻"],
  //     ["◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "◼"],
  //     ["◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "◼"],
  //     ["◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "◼"],
  //     ["◻", "◻", "◻", "◪", "⬕", "◻", "◻", "◻", "◼"],
  //     ["◻", "◻", "◻", "⬔", "◩", "◻", "◻", "◻", "◼"],
  //     ["◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "◼"],
  //     ["◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "◼"],
  //     ["◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻", "◼"]],

  //   keymap: [
  //     [108, 109, 110, 111, 112, 113, 114, 115, -1],
  //     [64, 65, 66, 67, 96, 97, 98, 99, 100], 
  //     [60, 61, 62, 63, 92, 93, 94, 95, 101],
  //     [56, 57, 58, 59, 88, 89, 90, 91, 102],
  //     [52, 53, 54, 55, 84, 85, 86, 87, 103],
  //     [48, 49, 50, 51, 80, 81, 82, 83, 104],
  //     [44, 45, 46, 47, 76, 77, 78, 79, 105],
  //     [40, 41, 42, 43, 72, 73, 74, 75, 106],
  //     [36, 37, 38, 39, 68, 69, 70, 71, 107]],

  //   width: 9, 
  //   height: 9,
    
  //   canvas_origin: [0,1],

  //   chainKey: [[8,1], [8,2], [8,3], [8,4], [8,5], [8,6], [8,7], [8,8]],

  //   mcTable: [
  //     [8,9], [1,9], [2,9], [3,9], [4,9], [5,9], [6,9], [7,9],
  //     [9,0], [9,1], [9,2], [9,3], [9,4], [9,5], [9,6], [9,7],
  //     null, null, null, null, null, null, null, null,
  //     null, null, null, null, null, null, null, null,],
  // },
  //203 Matrix
  {
    name: "Matrix",
    
    layout: [
      ["◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻"],
      ["◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻"],
      ["◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻"],
      ["◻", "◻", "◻", "◪", "⬕", "◻", "◻", "◻"],
      ["◻", "◻", "◻", "⬔", "◩", "◻", "◻", "◻"],
      ["◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻"],
      ["◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻"],
      ["◻", "◻", "◻", "◻", "◻", "◻", "◻", "◻"]],

    keymap: [
      [64, 65, 66, 67, 96, 97, 98, 99], 
      [60, 61, 62, 63, 92, 93, 94, 95],
      [56, 57, 58, 59, 88, 89, 90, 91],
      [52, 53, 54, 55, 84, 85, 86, 87],
      [48, 49, 50, 51, 80, 81, 82, 83],
      [44, 45, 46, 47, 76, 77, 78, 79],
      [40, 41, 42, 43, 72, 73, 74, 75],
      [36, 37, 38, 39, 68, 69, 70, 71],
      [100, 101, 102, 103, 104, 105, 106, 107]],

    width: 8, 
    height: 8,
    
    canvas_origin: [0,0],

    chainKey: [[0,8], [1,8], [2,8], [3,8], [4,8], [5,8], [6,8], [7,8]],

    mcTable: [
      null, null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null,
      null, null, null, null, null, null, null, null,],
  },
]

export default deviceConfigs;