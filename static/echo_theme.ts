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
        "--theme-border-base": "2px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "0 0 0",
        "--on-secondary": "0 0 0",
        "--on-tertiary": "255 255 255",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "0 0 0",
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
        // secondary | #D594F1 
        "--color-secondary-50": "249 239 253", // #f9effd
        "--color-secondary-100": "247 234 252", // #f7eafc
        "--color-secondary-200": "245 228 252", // #f5e4fc
        "--color-secondary-300": "238 212 249", // #eed4f9
        "--color-secondary-400": "226 180 245", // #e2b4f5
        "--color-secondary-500": "213 148 241", // #D594F1
        "--color-secondary-600": "192 133 217", // #c085d9
        "--color-secondary-700": "160 111 181", // #a06fb5
        "--color-secondary-800": "128 89 145", // #805991
        "--color-secondary-900": "104 73 118", // #684976
        // tertiary | #4A4A4A 
        "--color-tertiary-50": "228 228 228", // #e4e4e4
        "--color-tertiary-100": "219 219 219", // #dbdbdb
        "--color-tertiary-200": "210 210 210", // #d2d2d2
        "--color-tertiary-300": "183 183 183", // #b7b7b7
        "--color-tertiary-400": "128 128 128", // #808080
        "--color-tertiary-500": "74 74 74", // #4A4A4A
        "--color-tertiary-600": "67 67 67", // #434343
        "--color-tertiary-700": "56 56 56", // #383838
        "--color-tertiary-800": "44 44 44", // #2c2c2c
        "--color-tertiary-900": "36 36 36", // #242424
        // success | #93e198 
        "--color-success-50": "239 251 240", // #effbf0
        "--color-success-100": "233 249 234", // #e9f9ea
        "--color-success-200": "228 248 229", // #e4f8e5
        "--color-success-300": "212 243 214", // #d4f3d6
        "--color-success-400": "179 234 183", // #b3eab7
        "--color-success-500": "147 225 152", // #93e198
        "--color-success-600": "132 203 137", // #84cb89
        "--color-success-700": "110 169 114", // #6ea972
        "--color-success-800": "88 135 91", // #58875b
        "--color-success-900": "72 110 74", // #486e4a
        // warning | #ecbd3c 
        "--color-warning-50": "252 245 226", // #fcf5e2
        "--color-warning-100": "251 242 216", // #fbf2d8
        "--color-warning-200": "250 239 206", // #faefce
        "--color-warning-300": "247 229 177", // #f7e5b1
        "--color-warning-400": "242 209 119", // #f2d177
        "--color-warning-500": "236 189 60", // #ecbd3c
        "--color-warning-600": "212 170 54", // #d4aa36
        "--color-warning-700": "177 142 45", // #b18e2d
        "--color-warning-800": "142 113 36", // #8e7124
        "--color-warning-900": "116 93 29", // #745d1d
        // error | #e6516f 
        "--color-error-50": "251 229 233", // #fbe5e9
        "--color-error-100": "250 220 226", // #fadce2
        "--color-error-200": "249 212 219", // #f9d4db
        "--color-error-300": "245 185 197", // #f5b9c5
        "--color-error-400": "238 133 154", // #ee859a
        "--color-error-500": "230 81 111", // #e6516f
        "--color-error-600": "207 73 100", // #cf4964
        "--color-error-700": "173 61 83", // #ad3d53
        "--color-error-800": "138 49 67", // #8a3143
        "--color-error-900": "113 40 54", // #712836
        // surface | #4a4a4a 
        "--color-surface-50": "228 228 228", // #e4e4e4
        "--color-surface-100": "219 219 219", // #dbdbdb
        "--color-surface-200": "210 210 210", // #d2d2d2
        "--color-surface-300": "183 183 183", // #b7b7b7
        "--color-surface-400": "128 128 128", // #808080
        "--color-surface-500": "74 74 74", // #4a4a4a
        "--color-surface-600": "67 67 67", // #434343
        "--color-surface-700": "56 56 56", // #383838
        "--color-surface-800": "44 44 44", // #2c2c2c
        "--color-surface-900": "36 36 36", // #242424

    }
}