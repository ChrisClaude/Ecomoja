$ComponentName = Read-Host "Please enter component name"

$CharArray = $ComponentName -split "/"
$FileName = $CharArray[$CharArray.Count - 1] 

$InitialReactComponentContent = @"
import * as React from 'react';
  
const $FileName = () => {
	return <>
	  $FileName works!
	</>
};

export default $FileName;
"@

$ExportContent = @"
export { default } from './$FileName';
"@



New-Item -Name "$ComponentName" -ItemType "directory" -Force
New-Item -Path "$ComponentName" -Name "$FileName.tsx" -ItemType "file" -Value $InitialReactComponentContent
New-Item -Path "$ComponentName" -Name "$FileName.module.scss" -ItemType "file"
New-Item -Path "$ComponentName" -Name "index.ts" -ItemType "file" -Value $ExportContent 

Write-Output "----> Successfully generated component: $ComponentName"
