/*
  Requirements:
  - Count the number of files in a nested directory structure
  - The function should take three parameters:
    - files: number
    - firstFolder: Folder
    - remainsFolders: Folder[]  
  - The function should return the total number of files in the directory structure
*/

import { fileCounter, Folder } from "./fileCounter"

describe('FileCounter', () => {
  it('should count the number of files in a nested directory structure', () => {
    const folders: Folder[] = [
      {
        files: 2, folders: [
          { files: 1, folders: [] },
          {
            files: 1, folders: [
              { files: 1, folders: [] }
            ]
          }
        ]
      },
      {
        files: 1, folders: []
      }
    ]
    const result = fileCounter(0, folders[0], folders.slice(1))
    expect(result).toBe(6)
  })

  it('should count files in a single folder with no subfolders', () => {
    const singleFolder: Folder = {
      files: 5,
      folders: []
    }
    const result = fileCounter(0, singleFolder, [])
    expect(result).toBe(5)
  })

  it('should return 0 for an empty folder structure', () => {
    const emptyFolder: Folder = {
      files: 0,
      folders: []
    }
    const result = fileCounter(0, emptyFolder, [])
    expect(result).toBe(0)
  })

  it('should count files across multiple sibling folders', () => {
    const siblings: Folder[] = [
      { files: 3, folders: [] },
      { files: 2, folders: [] },
      { files: 4, folders: [] }
    ]
    const result = fileCounter(0, siblings[0], siblings.slice(1))
    expect(result).toBe(9)
  })

  it('should count files in deeply nested folder structure', () => {
    const deeplyNested: Folder = {
      files: 1,
      folders: [{
        files: 2,
        folders: [{
          files: 3,
          folders: [{
            files: 4,
            folders: []
          }]
        }]
      }]
    }
    const result = fileCounter(0, deeplyNested, [])
    expect(result).toBe(10) // 1 + 2 + 3 + 4
  })

  it('should handle folders with only subfolders (no files at root)', () => {
    const noRootFiles: Folder = {
      files: 0,
      folders: [
        { files: 5, folders: [] },
        { files: 3, folders: [] }
      ]
    }
    const result = fileCounter(0, noRootFiles, [])
    expect(result).toBe(8)
  })

  it('should count files in complex mixed structure', () => {
    const complexStructure: Folder[] = [
      {
        files: 2,
        folders: [
          {
            files: 1,
            folders: [
              { files: 2, folders: [] }
            ]
          },
          { files: 3, folders: [] }
        ]
      },
      {
        files: 1,
        folders: [
          { files: 4, folders: [] }
        ]
      },
      { files: 2, folders: [] }
    ]
    const result = fileCounter(0, complexStructure[0], complexStructure.slice(1))
    expect(result).toBe(15) // 2 + 1 + 2 + 3 + 1 + 4 + 2
  })

  it('should handle starting with non-zero initial count', () => {
    const folder: Folder = {
      files: 5,
      folders: [
        { files: 3, folders: [] }
      ]
    }
    const result = fileCounter(10, folder, [])
    expect(result).toBe(18) // 10 + 5 + 3
  })
})