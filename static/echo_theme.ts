import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const echoTheme: CustomThemeConfig = {
    name: 'echo',
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": `system-ui`,
        "--theme-font-family-heading": `system-ui`,
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "8px",
        "--theme-rounded-container": "8px",
        "--theme-border-base": "0px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "0 0 0",
        "--on-secondary": "255 255 255",
        "--on-tertiary": "255 255 255",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "255 255 255",
        "--on-surface": "255 255 255",
        // =~= Theme Colors  =~=
        // primary | #B0FFD5 
        "--color-primary-50": "243 255 249", // #f3fff9
        "--color-primary-100": "239 255 247", // #effff7
        "--color-primary-200": "235 255 245", // #ebfff5
        "--color-primary-300": "223 255 238", // #dfffee
        "--color-primary-400": "200 255 226", // #c8ffe2
        "--color-primary-500": "176 255 213", // #B0FFD5
        "--color-primary-600": "158 230 192", // #9ee6c0
        "--color-primary-700": "132 191 160", // #84bfa0
        "--color-primary-800": "106 153 128", // #6a9980
        "--color-primary-900": "86 125 104", // #567d68
        // secondary | #353535 
        "--color-secondary-50": "225 225 225", // #e1e1e1
        "--color-secondary-100": "215 215 215", // #d7d7d7
        "--color-secondary-200": "205 205 205", // #cdcdcd
        "--color-secondary-300": "174 174 174", // #aeaeae
        "--color-secondary-400": "114 114 114", // #727272
        "--color-secondary-500": "53 53 53", // #353535
        "--color-secondary-600": "48 48 48", // #303030
        "--color-secondary-700": "40 40 40", // #282828
        "--color-secondary-800": "32 32 32", // #202020
        "--color-secondary-900": "26 26 26", // #1a1a1a
        // tertiary | #353535 
        "--color-tertiary-50": "225 225 225", // #e1e1e1
        "--color-tertiary-100": "215 215 215", // #d7d7d7
        "--color-tertiary-200": "205 205 205", // #cdcdcd
        "--color-tertiary-300": "174 174 174", // #aeaeae
        "--color-tertiary-400": "114 114 114", // #727272
        "--color-tertiary-500": "53 53 53", // #353535
        "--color-tertiary-600": "48 48 48", // #303030
        "--color-tertiary-700": "40 40 40", // #282828
        "--color-tertiary-800": "32 32 32", // #202020
        "--color-tertiary-900": "26 26 26", // #1a1a1a
        // success | #44c62a 
        "--color-success-50": "227 246 223", // #e3f6df
        "--color-success-100": "218 244 212", // #daf4d4
        "--color-success-200": "208 241 202", // #d0f1ca
        "--color-success-300": "180 232 170", // #b4e8aa
        "--color-success-400": "124 215 106", // #7cd76a
        "--color-success-500": "68 198 42", // #44c62a
        "--color-success-600": "61 178 38", // #3db226
        "--color-success-700": "51 149 32", // #339520
        "--color-success-800": "41 119 25", // #297719
        "--color-success-900": "33 97 21", // #216115
        // warning | #f0c424 
        "--color-warning-50": "253 246 222", // #fdf6de
        "--color-warning-100": "252 243 211", // #fcf3d3
        "--color-warning-200": "251 240 200", // #fbf0c8
        "--color-warning-300": "249 231 167", // #f9e7a7
        "--color-warning-400": "245 214 102", // #f5d666
        "--color-warning-500": "240 196 36", // #f0c424
        "--color-warning-600": "216 176 32", // #d8b020
        "--color-warning-700": "180 147 27", // #b4931b
        "--color-warning-800": "144 118 22", // #907616
        "--color-warning-900": "118 96 18", // #766012
        // error | #cf3f5c 
        "--color-error-50": "248 226 231", // #f8e2e7
        "--color-error-100": "245 217 222", // #f5d9de
        "--color-error-200": "243 207 214", // #f3cfd6
        "--color-error-300": "236 178 190", // #ecb2be
        "--color-error-400": "221 121 141", // #dd798d
        "--color-error-500": "207 63 92", // #cf3f5c
        "--color-error-600": "186 57 83", // #ba3953
        "--color-error-700": "155 47 69", // #9b2f45
        "--color-error-800": "124 38 55", // #7c2637
        "--color-error-900": "101 31 45", // #651f2d
        // surface | #232323 
        "--color-surface-50": "222 222 222", // #dedede
        "--color-surface-100": "211 211 211", // #d3d3d3
        "--color-surface-200": "200 200 200", // #c8c8c8
        "--color-surface-300": "167 167 167", // #a7a7a7
        "--color-surface-400": "101 101 101", // #656565
        "--color-surface-500": "35 35 35", // #232323
        "--color-surface-600": "32 32 32", // #202020
        "--color-surface-700": "26 26 26", // #1a1a1a
        "--color-surface-800": "21 21 21", // #151515
        "--color-surface-900": "17 17 17", // #111111
    }
}