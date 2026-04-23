export type Folder = {
  files: number
  folders: Folder[]
}

export const fileCounter = (
  files: number,
  firstFolder: Folder | undefined,
  remainsFolders: Folder[]
): number =>
  firstFolder === undefined
    ? remainsFolders.length === 0
      ? files
      : fileCounter(files, remainsFolders[0], remainsFolders.slice(1))
    : fileCounter(
      files + firstFolder.files,
      firstFolder.folders[0],
      [...firstFolder.folders.slice(1), ...remainsFolders]
    )