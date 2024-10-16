import gulp from "gulp";

import {deleteAsync} from 'del';


import path from "../config/path.js";

const clean =   () => {
    return deleteAsync(path.root)
}

export default clean;