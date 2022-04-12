

// CODE insde the Teacher.js file.
// 
// export function promote() {}
//
// export default class Teacher extends Person {
// }



// current folder
import Teacher, { promote } from "./teacher";
// if a file is inside a directory in the current folder (child folder)
import Teacher, { promote } from "./compoents/teacher";
// sibling folder
import Teacher, { promote } from "../components/teacher";
import React, { Component } from 'react';

// from should be the name of file, ie teacher is name of file, while Teacher is name of the class inside the file
// the name of the file on the import line should not have a .js extention.


// Default -> import Teacher from '';
// Named   -> import { promote } from ''; 