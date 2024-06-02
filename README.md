# Castrol BP Promotion

## Required environment

- Node.js verion >= 14
- Yarn latest

## Steps to build react App

1. Navigate to "web-landing" folder for the UI source code.
2. Run "yarn" command to install node modules.
3. Run "yarn export" build to build the code.
4. A build folder will be generated after the step 3. 
5. Files in the build folder should be moved to the S3 bucket.
6. The files and folders in the build should be uploaded in the S3 bucket under folder “/out”.

## Deploy App

- Production URL: https://khuyenmaicastrol.com/