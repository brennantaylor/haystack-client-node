/*
 *  Copyright 2018 Expedia, Inc.
 *
 *       Licensed under the Apache License, Version 2.0 (the "License");
 *       you may not use this file except in compliance with the License.
 *      You may obtain a copy of the License at
 *
 *           http://www.apache.org/licenses/LICENSE-2.0
 *
 *       Unless required by applicable law or agreed to in writing, software
 *       distributed under the License is distributed on an "AS IS" BASIS,
 *       WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *       See the License for the specific language governing permissions and
 *       limitations under the License.
 */

import uuidv4 = require('uuid/v4');

export default class Utils {
    static randomUUID(): string {
        return uuidv4();
    }

    static assign(origObject, key, value): any {
        const newObject = {};
        for (const k in origObject) {
            if (origObject.hasOwnProperty(k)) {
                newObject[k] = origObject[k];
            }
        }
        newObject[key] = value;
        return newObject;
    }

    static merge(origObject, mergeObj): any {
        const newObject = {};
        for (const k in origObject) {
            if (origObject.hasOwnProperty(k)) {
                newObject[k] = origObject[k];
            }
        }

        for (const k in mergeObj) {
            if (mergeObj.hasOwnProperty(k)) {
                newObject[k] = mergeObj[k];
            }
        }

        return newObject;
    }

    static now(): number {
        // return in micro seconds
        return Date.now() * 1000;
    }

    static isFloatType(value: number): boolean {
        return (value % 1 !== 0);
    }
}
