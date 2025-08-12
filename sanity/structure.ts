/* eslint-disable @typescript-eslint/no-explicit-any */
// https://www.sanity.io/docs/structure-builder-cheat-sheet
// Keep this file untyped to avoid Next.js type-check errors in app build
export const structure = (S: any) =>
  S.list()
    .title('Content')
    .items(S.documentTypeListItems())
