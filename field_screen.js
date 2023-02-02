const driver = require("webdriverio"); //webdriverio
const assert = require("assert");
const keycode = require('keycode');
const sleep = require('sleep-promise');
const colors = require('colors');
// const params = require('minimist')(process.argv.slice(2));
const Reporter = require('./testreport.js');
const REPORTER = new Reporter('./', 'Field Regression Script', `./Configuration_pheno.json`);
//const Database1 = require('./database_connection.js'); 
//const DATABASE = new Database1() 
const fs = require('fs');
const { default: click } = require("webdriverio/build/commands/element/click");
const { default: waitUntil } = require("webdriverio/build/commands/browser/waitUntil");
const { now } = require("moment");
const { AsyncLocalStorage } = require("async_hooks");

// Lenovo TB-8504F
// adbexectimeout: 20000,

const opts = {
    path: '/wd/hub',
    port: 5736,  
    capabilities: {
      platformName: "Android",
      platformVersion: "10",
      deviceName: "HA1AMGE8",
      appPackage: "com.example.terramaxminioperatorandroid",
      appActivity: "com.example.terramaxminioperatorandroid.features.new_designs.MainActivityNd",
      automationName: "UiAutomator2",
      autoGrantPermissions: true,
      disableWindowAnimation: true,
      waitForIdleTimeout: 0,
      waitForQuiescence:false
    }
  };
  
  // -- Add any other needed values
  const fixString = (string) => {
    string = string.replace("V", "");
    string = string.replace(" ", "");
    string = string.replace("%", "");
    string = string.replace("F", "");
    return string;
  }
  
  var total_testcases= 0;
  var pass_testcases =0;
  var fail_testcases =0;
  
  async function main () {
    var timeBegin = (new Date()).getTime();
    var obj = JSON.parse(fs.readFileSync('./Configuration_pheno.json', 'utf8'));
   
    const client = await driver.remote(opts);
  
    await client.setImplicitTimeout(10000);
  
    await waitForActivity(client);

/***********CHANGE ROBOT TYPE **************/
//To check if user can view the Robot Type drop-down list
var timeStart = (new Date()).getTime();
const types= await findItemById(client,"android.widget.TextView","tv_robot_mode")
await types.click()
var timeEnd = (new Date()).getTime();

if(types !== null)
{
  total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","To check if user can view the Robot Type drop-down list","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  }
  else
  {
  total_testcases++;
  fail_testcases++;
  testcase_name("SuperTS","To check if user can view the Robot Type drop-down list","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.red("Fail"))
  await waitForActivity(client)
        const field_manager_screen__= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_screen__.click()
    const click_field_created__= await findItemById(client,"android.view.ViewGroup","cl_container")
     await click_field_created__.click()
  }


//To check if user can select a robot-type from the dropdown-list
var timeStart = (new Date()).getTime();
const select_robot= await findItemByName(client,"android.widget.TextView",obj.robot_type)
await select_robot.click()
var timeEnd = (new Date()).getTime();


const check_slected_robot_name= await findItemById(client,"android.widget.TextView","tv_robot_mode")

if(check_slected_robot_name !== null)
{
total_testcases++;
pass_testcases++;
testcase_name("SuperTS","To check if user can select a robot type from the drop-down list","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
console.log(colors.yellow("Pass"))
}
else
{
total_testcases++;
fail_testcases++;
testcase_name("SuperTS","To check if user can select a robot type from the drop-down list","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
console.log(colors.red("Fail"))
}

await waitForActivity(client);



//View FAB button
var timeStart = (new Date()).getTime();
  const fab_button_view= await findItemById(client,"android.widget.ImageButton","fab_create")
  await waitForActivity(client)
  var timeEnd = (new Date()).getTime();
  
  if(fab_button_view !== null){
    total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check if user can view the FAB button","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
      client.back()
        testcase_name("SuperTS","Field:To check if user can view the FAB button","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        console.log(colors.red("Fail"))
    }

//Click on FAB button
var timeStart = (new Date()).getTime();
  const fab_button_click= await findItemById(client,"android.widget.ImageButton","fab_create")
  await waitForActivity(client)
  var timeEnd = (new Date()).getTime();
  
  if(fab_button_click !== null){
    total_testcases++;
    pass_testcases++;
    fab_button_click.click()
    testcase_name("SuperTS","Field:To check if user can click the FAB button","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check if user can click the FAB button","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        console.log(colors.red("Fail"))
    }

    await waitForActivity(client)

//To check if user can view field icon in FAB button list
var timeStart = (new Date()).getTime();
  const fab_button_field_view= await findItemById(client,"android.widget.ImageView","fab_create_field")
  await waitForActivity(client)
  var timeEnd = (new Date()).getTime();
  
  if(fab_button_field_view !== null){
    total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check if user can view field icon in FAB button list","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check if user can view field icon in FAB button list","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        console.log(colors.red("Fail"))
    }

    //To check if user can click on field icon in FAB button list
var timeStart = (new Date()).getTime();
const fab_button_field_click= await findItemById(client,"android.widget.ImageView","fab_create_field")
await waitForActivity(client)
var timeEnd = (new Date()).getTime();

if(fab_button_field_click !== null){
  total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check if user can click on field icon in the FAB list","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  fab_button_field_click.click()
  await waitForActivity(client)
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check if user can click on field icon in the FAB list","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
      console.log(colors.red("Fail"))
  }

//To check if user can view the Field Creation screen on clicking on Field
var timeStart = (new Date()).getTime();
const field_creation_screen= await findItemById(client,"android.widget.EditText","et_field_name")
await waitForActivity(client)
var timeEnd = (new Date()).getTime();

if(field_creation_screen !== null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check if user can view the Field Creation screen on clicking on Field ","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  fab_button_field_click.click()
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check if user can view the Field Creation screen on clicking on Field ","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
      console.log(colors.red("Fail"))
  }
  
  //To check if user cannot save field without entering mandatory details
  var timeStart = (new Date()).getTime();
  var save_field_test= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_test.click()
var timeEnd = (new Date()).getTime();

//To check if the field has been saved
console.log(colors.red("check if drive screen icon is visible"))
await waitForActivity(client)
  const drive_screen_test = await findItemById(client,"android.widget.TextView","tv_drive")

  if(drive_screen_test == null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check if user cannot save field without entering mandatory details","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check if user cannot save field without entering mandatory details:","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        console.log(colors.red("Fail"))
    }



  //To check if user can create a field with valid field details:
  var timeStart = (new Date()).getTime();
  
 //Add Min,Max range column plot length,row width and rows per plot value 
 console.log(colors.red("Adding min column value"));
const startColumn=await findItemById(client,"android.widget.EditText","et_min_columns");
 await setValueEditText(client, startColumn,obj.min_column);
 await waitForActivity(client)

console.log(colors.red("Adding max column value"));
const stopColumn=await findItemById(client,"android.widget.EditText","et_max_columns");
await setValueEditText(client, stopColumn,obj.max_column); 
await waitForActivity(client)

console.log(colors.red("Adding min range value"));
const startRange=await findItemById(client,"android.widget.EditText","et_min_ranges");
await setValueEditText(client, startRange,obj.min_range);
await waitForActivity(client)

console.log(colors.red("Added max range value"));
const stopRange=await findItemById(client,"android.widget.EditText","et_max_ranges");
 await setValueEditText(client, stopRange,obj.max_range); 
 await waitForActivity(client)

console.log(colors.red("Added plot length value"));
const plotLength=await findItemById(client,"android.widget.EditText","et_plot_length");
await setValueEditText(client, plotLength,obj.plot_length);
await waitForActivity(client)

console.log(colors.red("Added row width value"));
const rowWidth=await findItemById(client,"android.widget.EditText","et_row_width");
await setValueEditText(client, rowWidth,obj.row_width);
await waitForActivity(client)

console.log(colors.red("Added row per column value"));
const rowsPerColumn=await findItemById(client,"android.widget.EditText","et_row_per_plot");
await setValueEditText(client, rowsPerColumn,obj.row_per_column);
await waitForActivity(client)


//Add Planting Date 
console.log(colors.red("Click on add planting date"));
const plantingDate=await findItemByName(client,"android.widget.TextView","Add Planting Date")
await waitForActivity(client)
await clickItem(client,plantingDate);

console.log(colors.red("Click on ok"));
const dateOkay = await findItemByName(client,"android.widget.Button","OK");
await clickItem(client,dateOkay);
await waitForActivity(client)

console.log(colors.red("Add Crop"))
const add_crop= await findItemById(client,"android.widget.TextView","tv_crop_type")
await add_crop.click()
await waitForActivity(client)

console.log(colors.red("Select a crop"))
const select_crop= await findItemByName(client,"android.widget.TextView","Corn")
await select_crop.click()
await waitForActivity(client)

//Set Field Name
var valid_field_name= await findItemById(client,"android.widget.EditText","et_field_name") 
await setValueEditText(client,valid_field_name,obj.field_name)
await waitForActivity(client)
 
  console.log(colors.red("Click on add Plant Spacing"));
   const cropPlantingSpace=await findItemById(client,"android.widget.LinearLayout","ll_planting_space_content");
   console.log(cropPlantingSpace)
   await clickItem(client,cropPlantingSpace)
   await clickItem(client,cropPlantingSpace)
   await waitForActivity(client)
   
   console.log(colors.red("Enter planting Space"))
   const add_planting_space= await findItemById(client,"android.widget.EditText","et_planting_space")
   await setValueEditText(client,add_planting_space,obj.plant_space)
   await waitForActivity(client)
   client.back()


    //Save the field
    var save_field= await findItemById(client,"android.widget.FrameLayout","save_button")
    await save_field.click()
  var timeEnd = (new Date()).getTime();

  //To check if the field has been saved successfully
  console.log(colors.red("check if drive screen icon is visible"))
await waitForActivity(client)
  const drive_screen_icon = await findItemById(client,"android.widget.TextView","tv_drive")

  if(drive_screen_icon !== null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check if user can create and save a field with valid details","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check if user can reate and save a field with valid details:","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        client.back()
        console.log(colors.red("Fail"))
    }

//Check if the recently created field is available on the field manager screen
var timeStart = (new Date()).getTime();
const field_manager_screen= await findItemById(client,"android.widget.TextView","tv_waypoint")
await field_manager_screen.click()

const recently_created_field= await findItemByName(client,"android.widget.TextView",obj.field_name)
var timeEnd = (new Date()).getTime();

if(recently_created_field !== null)
{
total_testcases++;
pass_testcases++;
testcase_name("SuperTS","Check if the recently created field is available on the field manager screen","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
console.log(colors.yellow("Pass"))
const click_field_created= await findItemById(client,"android.view.ViewGroup","cl_container")
await click_field_created.click()
}
else
{
total_testcases++;
fail_testcases++;
testcase_name("SuperTS","Check if the recently created field is available on the field manager screen","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
console.log(colors.red("Fail"))
}
await waitForActivity(client);

/*******************Field Name Test Cases ****************/
//To check field name does not accept only spaces as field name
var timeStart = (new Date()).getTime();
await waitForActivity(client)
var click_on_edit_icon= await findItemById(client,"android.widget.ImageView","iv_field_name_button")//find the pencil icon
await waitForActivity(client) 
await click_on_edit_icon.click() //click on the icon
var field_name_with_spaces= await findItemById(client,"android.widget.EditText","et_field_name") 
await setValueEditText(client,field_name_with_spaces,"  ")  //Set field name
await waitForActivity(client)

const add_crop1= await findItemById(client,"android.widget.TextView","tv_crop_type")
await add_crop1.click()
const select_crop1= await findItemByName(client,"android.widget.TextView","Corn")
await select_crop1.click()

var save_field1= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button to save the field
await save_field1.click()

var timeEnd = (new Date()).getTime();

console.log(colors.red("Check if drive screen icon is visible1")) //This is to check if the user exits the screen after clicking on Save
await sleep(1000) //Implicit wait
 const drive_screen_icon12 = await findItemById(client,"android.widget.TextView","tv_drive")

  if(drive_screen_icon12 == null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check field name does not accept only spaces as field name","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check field name does not accept only spaces as field name","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        console.log("Move to field manager screen")
        const field_manager_screeenn= await findItemById(client,"android.widget.TextView","tv_waypoint")  //Click on field manager icon
        await field_manager_screeenn.click()
      const click_field_created1= await findItemById(client,"android.view.ViewGroup","cl_container")   //click on the recently created field
     await click_field_created1.click()
        console.log(colors.red("Fail"))
    }

//To check if user cannot save field without adding field name
var timeStart = (new Date()).getTime();
await waitForActivity(client)
var click_on_edit_Iconn= await findItemById(client,"android.widget.ImageView","iv_field_name_button")
await waitForActivity(client) 
await click_on_edit_Iconn.click()
var without_field_name= await findItemById(client,"android.widget.EditText","et_field_name") 
await setValueEditText(client,without_field_name,"")
await waitForActivity(client)

const add_cropp= await findItemById(client,"android.widget.TextView","tv_crop_type")
await add_cropp.click()
const select_cropp= await findItemByName(client,"android.widget.TextView","Corn")
await select_cropp.click()

var save_field_= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_.click()

var timeEnd = (new Date()).getTime();

console.log(colors.red("Check if drive screen icon is visible2"))
await sleep(1000) //Implicit wait
  const drive_screen_icon_ = await findItemById(client,"android.widget.TextView","tv_drive")

  if(drive_screen_icon_ == null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check if user cannot save field without adding field name","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check if user cannot save field without adding field name","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        await waitForActivity(client)
        const field_manager_screen_= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_screen_.click()
    const click_field_created_= await findItemById(client,"android.view.ViewGroup","cl_container")
     await click_field_created_.click()
        console.log(colors.red("Fail"))
    }

    //To check if user cannot save field with field name containing only numbers
var timeStart = (new Date()).getTime();
await waitForActivity(client)
var click_on_edit_iconn_= await findItemById(client,"android.widget.ImageView","iv_field_name_button")
await waitForActivity(client) 
await click_on_edit_iconn_.click()
var numeric_field_name= await findItemById(client,"android.widget.EditText","et_field_name") 
await setValueEditText(client,numeric_field_name,obj.neg_field_name[0])
const add_cropp_= await findItemById(client,"android.widget.TextView","tv_crop_type")
await add_cropp_.click()
const select_cropp_= await findItemByName(client,"android.widget.TextView","Corn")
await select_cropp_.click()
var save_field_1= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_1.click()
var timeEnd = (new Date()).getTime();


console.log(colors.red("Check if drive screen icon is visible3"))
await waitForActivity(client)
const drive_screeen_icon_1 = await findItemById(client,"android.widget.TextView","tv_drive")
console.log(drive_screeen_icon_1)

  if(drive_screeen_icon_1 == null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check if user cannot save field with field name containing only numbers","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass Drive"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check if user cannot save field with field name containing only numbers","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        await waitForActivity(client)
        const field_manager_screen_1= await findItemById(client,"android.widget.TextView","tv_waypoint")
        console.log(field_manager_screen_1)
        await field_manager_screen_1.click()
        await waitForActivity(client)
    const click_field_created_1= await findItemById(client,"android.view.ViewGroup","cl_container")
     await click_field_created_1.click()
        console.log(colors.red("Fail Drive"))
    }

    //To check if user cannot save field with field name containing only special characters

    var timeStart = (new Date()).getTime();
    await sleep(1000) //Implicit wait
var click_on_edit_iconn_2= await findItemById(client,"android.widget.ImageView","iv_field_name_button")
console.log(click_on_edit_iconn_2)
await click_on_edit_iconn_2.click()
var special_field_name= await findItemById(client,"android.widget.EditText","et_field_name") 
await setValueEditText(client,special_field_name,obj.neg_field_name[1])

const add_cropp_2= await findItemById(client,"android.widget.TextView","tv_crop_type")
await add_cropp_2.click()
const select_cropp_2= await findItemByName(client,"android.widget.TextView","Corn")
await select_cropp_2.click()
var save_field_2= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_2.click()

var timeEnd = (new Date()).getTime();

console.log(colors.red("Check if drive screen icon is visible4"))
await sleep(1000) //Implicit wait
const drive_screen_icon_2 = await findItemById(client,"android.widget.TextView","tv_drive")

  if(drive_screen_icon_2 == null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check if user cannot save field with field name containing only special characters","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check if user cannot save field with field name containing only special characters","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        await sleep(1000) //Implicit wait
        const field_manager_screen_2= await findItemByName(client,"android.widget.TextView","Fields")
        await field_manager_screen_2.click()
    const click_field_created_2= await findItemById(client,"android.view.ViewGroup","cl_container")
     await click_field_created_2.click()
        console.log(colors.red("Fail"))
    }

   //To check if user cannot save field with field name containing combination of only special and numeric characters

 var timeStart = (new Date()).getTime();
 await waitForActivity(client)
 const click_on_edit_iconnnn_3= await findItemById(client,"android.widget.ImageView","iv_field_name_button")
 await waitForActivity(client) 
  await click_on_edit_iconnnn_3.click()
 const combo_field_name= await findItemById(client,"android.widget.EditText","et_field_name") 
 await setValueEditText(client,combo_field_name,obj.neg_field_name[2])
 await waitForActivity(client)

const add_cropp_3= await findItemById(client,"android.widget.TextView","tv_crop_type")
await add_cropp_3.click()
const select_cropp_3= await findItemByName(client,"android.widget.TextView","Corn")
await select_cropp_3.click()

var save_field_3= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_3.click()

var timeEnd = (new Date()).getTime();

console.log(colors.red("Check if drive screen icon is visible5"))
await waitForActivity(client)
  const drive_screen_icon_3 = await findItemById(client,"android.widget.TextView","tv_drive")

  if(drive_screen_icon_3 == null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check if user cannot save field with field name containing combination of only special and numeric characters","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check if user cannot save field with field name containing combination of only special and numeric characters","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        await sleep(1000)
        const field_manager_screen_3= await findItemById(client,"android.widget.TextView","tv_waypoint")
        console.log(field_manager_screen_3)
        await field_manager_screen_3.click()
        await waitForActivity(client)
    const click_field_created_3= await findItemById(client,"android.view.ViewGroup","cl_container")
     await click_field_created_3.click()
        console.log(colors.red("Fail"))
    }

  //To check if field name accepts alphanumeric values
  var timeStart = (new Date()).getTime();
 await sleep(1000)
 const click_on_edit_icon_4= await findItemById(client,"android.widget.ImageView","iv_field_name_button")
 console.log(click_on_edit_icon_4)
  await click_on_edit_icon_4.click()
 const pos_field_name= await findItemById(client,"android.widget.EditText","et_field_name") 
 await setValueEditText(client,pos_field_name,obj.field_name)
 await waitForActivity(client)

const add_cropp_4= await findItemById(client,"android.widget.TextView","tv_crop_type")
await add_cropp_4.click()
const select_cropp_4= await findItemByName(client,"android.widget.TextView","Corn")
await select_cropp_4.click()

var save_field_4= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_4.click()

var timeEnd = (new Date()).getTime();

console.log(colors.red("Check if drive screen icon is visible6"))
await waitForActivity(client)
  const drive_screen_icon_4 = await findItemById(client,"android.widget.TextView","tv_drive")

  if(drive_screen_icon_4 !== null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check if field name accepts alphanumeric values","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    await waitForActivity(client)
      const field_manager_screen_4= await findItemById(client,"android.widget.TextView","tv_waypoint")
      console.log(field_manager_screen_4)
        await field_manager_screen_4.click()
        await waitForActivity(client)
    const click_field_created_4= await findItemById(client,"android.view.ViewGroup","cl_container")
     await click_field_created_4.click()
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check if field name accepts alphanumeric values","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        await waitForActivity(client)
        console.log(colors.red("Fail"))
    }
await waitForActivity(client)

    /*******************Add Planting Date Testcases ****************/
//To check if user can view the calendar after clicking on Add planting Date
var timeStart = (new Date()).getTime();
console.log(colors.red("Click on add planting date"));
const plantingDate_1=await findItemById(client,"android.widget.TextView","tv_planting_date")
await waitForActivity(client)
await clickItem(client,plantingDate_1);
var timeEnd = (new Date()).getTime();

const next_button= await findItemById(client,"android.widget.ImageButton","next") //this is to check if the calendar is visible on the screen

if(next_button !== null)
{
  total_testcases++;
pass_testcases++;
testcase_name("SuperTS","To check if user can view the calendar after clicking on Add planting Date","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
console.log(colors.yellow("Pass"))
} else
{
  total_testcases++;
fail_testcases++;
testcase_name("SuperTS","To check if user can view the calendar after clicking on Add planting Date","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
console.log(colors.red("Fail"))
}

//To check if the user can move to the next month by clicking on the next arrow
var timeStart = (new Date()).getTime();
const next_button1= await findItemById(client,"android.widget.ImageButton","next") // move to the next month
var timeEnd = (new Date()).getTime();
  if(next_button1 !== null)
{
    total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","To check if the user can move to the next month by clicking on the next arrow","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  await next_button1.click()
} else
{
  total_testcases++;
  fail_testcases++;
  testcase_name("SuperTS","To check if the user can move to the next month by clicking on the next arrow","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.red("Fail"))
}

//To check if the user can move to the previous month by clicking on the previous arrow
var timeStart = (new Date()).getTime();
const previous_button= await findItemById(client,"android.widget.ImageButton","prev") // move to the next month
var timeEnd = (new Date()).getTime();
  if(previous_button !== null)
{
    total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","To check if the user can move to the previous month by clicking on the previous arrow","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  await previous_button.click()
} else
{
  total_testcases++;
  fail_testcases++;
  testcase_name("SuperTS","To check if the user can move to the previous month by clicking on the previous arrow","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.red("Fail"))
}

//To check if user can click on the cancel button and exit the calendar
var timeStart = (new Date()).getTime();
var cancel_calendar= await findItemByName(client,"android.widget.Button","CANCEL")
await cancel_calendar.click()
var timeEnd = (new Date()).getTime();

await waitForActivity(client)
const plantingDate_2=await findItemById(client,"android.widget.TextView","tv_planting_date") //To check if the user has exited the calendar 

if(plantingDate_2 !== null)
{
  total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","To check if user can click on the cancel button and exit the calendar","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  plantingDate_2.click()
} else
{
  total_testcases++;
  fail_testcases++;
  testcase_name("SuperTS","To check if user can click on the cancel button and exit the calendar","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.red("Fail"))
  client.back()
}

//To check if user can select a specific date from the calendar and save it
await waitForActivity(client)
const date= await findItemByName(client,"android.view.View","5")
await clickItem(client,date)
console.log(colors.red("Click on ok"));
const dateOkay_1 = await findItemByName(client,"android.widget.Button","OK");
await clickItem(client,dateOkay_1);
await waitForActivity(client)

await waitForActivity(client)
const plantingDate_3=await findItemById(client,"android.widget.TextView","tv_planting_date") //To check if the user has exited the calendar 

if(plantingDate_3 !== null)
{
  total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","To check if user can select a specific date from the calendar and save it","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
} else
{
  total_testcases++;
  fail_testcases++;
  testcase_name("SuperTS","To check if user can select a specific date from the calendar and save it","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.red("Fail"))
  client.back()
}

/*******************Add Crop ****************/
//To check if user can remove the added crop by clicking on X icon
var timeStart = (new Date()).getTime();
await sleep(1000)
var remove_crop_name= await findItemById(client,"android.widget.ImageView","iv_remove_crop")
await remove_crop_name.click()
var timeEnd = (new Date()).getTime();

const add_crop_1= await findItemByName(client,"android.widget.TextView","Add Crop")

if(add_crop_1 !== null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check if user can remove the added crop by clicking on the X icon","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check if user can remove the added crop by clicking on the X icon","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
      console.log(colors.red("Fail"))
  }

  //To check if user can save a field without adding crop details
  var timeStart = (new Date()).getTime();
  var save_field_without_crop= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_without_crop.click()
var timeEnd = (new Date()).getTime();

console.log(colors.red("check if drive screen icon is visible"))//To check if the user has exitied the field creation screen
await waitForActivity(client)
  const drive_screen_check_ = await findItemById(client,"android.widget.TextView","tv_drive")

  if(drive_screen_check_ == null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check if user cannot save field without adding crop","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check if user cannot save field without adding crop ","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        const field_manager_screen_test= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_screen_test.click()
        const click_field_created_check= await findItemById(client,"android.view.ViewGroup","cl_container")
        await click_field_created_check.click()
        console.log(colors.red("Fail"))
    }

  //To check if the user can select a crop from the list
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Add Crop"))
const add_cropp0= await findItemById(client,"android.widget.TextView","tv_crop_type")
await add_cropp0.click()
await waitForActivity(client)

console.log(colors.red("Select a crop"))
const select_cropp0= await findItemByName(client,"android.widget.TextView",obj.crop)
await select_cropp0.click()
await waitForActivity(client)
var timeEnd = (new Date()).getTime();

const add_crop_2= await findItemById(client,"android.widget.TextView","tv_crop_type")

if(add_crop_2 !== null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check if the user can select a crop from the list","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check if the user can select a crop from the list","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
      console.log(colors.red("Fail"))
  }

//To check if the selected Crop is visible on the screen
var timeStart = (new Date()).getTime();
const add_crop_3= await findItemByName(client,"android.widget.TextView",obj.crop)
var timeEnd = (new Date()).getTime();

if(add_crop_3 !== null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check if the selected Crop is visible on the screen","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check if the selected Crop is visible on the screen","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
      console.log(colors.red("Fail"))
  }

  //To check if the user can click on Create new crop and view create new crop screen
  var timeStart = (new Date()).getTime();
  const add_cropp_0= await findItemById(client,"android.widget.TextView","tv_crop_type")
  await add_cropp_0.click()
  var create_new_crop= await findItemById(client,"android.widget.TextView","tv_create_new")
  console.log(create_new_crop)
  await clickItem(client,create_new_crop)
  var timeEnd = (new Date()).getTime();

  await waitForActivity(client)
  const new_crop_screen= await findItemByName(client,"android.widget.TextView","Create New Crop")

  if(new_crop_screen !== null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check if the user can click on Create new crop and view create new crop screen","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check if the user can click on Create new crop and view create new crop screen","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        console.log(colors.red("Fail"))
    }
  
 //To check if the user cannot exit the create new crop screen without adding a crop name
 var timeStart = (new Date()).getTime();
 var create_new_crop_button= await findItemById(client,"android.widget.Button","launch_button")
 await clickItem(client,create_new_crop_button)
 var timeEnd = (new Date()).getTime();

 await waitForActivity(client)
 const new_crop_screen1= await findItemByName(client,"android.widget.TextView","Create New Crop")

 if(new_crop_screen1 !== null)
 {total_testcases++;
   pass_testcases++;
   testcase_name("SuperTS","Field:To check if the user cannot exit the create new crop screen without adding a crop name","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
   console.log(colors.yellow("Pass"))
   } else{
     total_testcases++;
     fail_testcases++;
       testcase_name("SuperTS","Field:To check if the user cannot exit the create new crop screen without adding a crop name","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
       console.log(colors.red("Fail"))
   }


   //To check if the user can exit the create new crop screen by clicking on the cancel button
   var timeStart = (new Date()).getTime();
 var cancel_new_crop_button= await findItemById(client,"android.widget.Button","discard_button")
 await clickItem(client,cancel_new_crop_button)
 var timeEnd = (new Date()).getTime();

 await waitForActivity(client)
 const new_crop_screen2= await findItemByName(client,"android.widget.TextView","Create New Crop")

 if(new_crop_screen2 == null)
 {total_testcases++;
   pass_testcases++;
   testcase_name("SuperTS","Field:To check if the user can exit the create new crop screen by clicking on the cancel button","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
   console.log(colors.yellow("Pass"))
   var create_new_crop1= await findItemById(client,"android.widget.TextView","tv_create_new")
   await clickItem(client,create_new_crop1)
   } else{
     total_testcases++;
     fail_testcases++;
       testcase_name("SuperTS","Field:To check if the user can exit the create new crop screen by clicking on the cancel button","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
       console.log(colors.red("Fail"))
   }

//To check if the user can create a custom crop
var timeStart = (new Date()).getTime();
var custom_crop= await findItemById(client,"android.widget.EditText","et_crop_name")
await setValueEditText(client,custom_crop,obj.custom_crop)
var create_new_crop_buttonn1= await findItemById(client,"android.widget.Button","launch_button")
await clickItem(client,create_new_crop_buttonn1)
var timeEnd = (new Date()).getTime();

const add_crop_check= await findItemById(client,"android.widget.TextView","tv_crop_type")

if(add_crop_check !== null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check if the user can create a custom cropt","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check if the user can create a custom crop","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
      console.log(colors.red("Fail"))
  }


  //To check if the custom crop is visible on the field creation screen
  var timeStart = (new Date()).getTime();
const _crop_custom= await findItemByName(client,"android.widget.TextView",obj.custom_crop)
var timeEnd = (new Date()).getTime();

if(_crop_custom !== null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check if the custom crop is visible on the field creation screen","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass Crop visible"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check if the custom crop is visible on the field creation screen","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
      console.log(colors.red("Fail"))
  }

  //To check if the user can re-select the custom crop from the list
  var timeStart = (new Date()).getTime();
  const add_crop_5= await findItemById(client,"android.widget.TextView","tv_crop_type")
  console.log("add crop:"+ add_crop_5)
  await add_crop_5.click()
  const select_crop_5 = await findItemByName(client,"android.widget.TextView",obj.custom_crop)
  await select_crop_5.click()
  var timeEnd = (new Date()).getTime();

  const add_crop_text= await findItemById(client,"android.widget.TextView","tv_crop_type")

  if(add_crop_text !== null)
    {
    total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check if the user can re-select the custom crop from the list","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check if the user can re-select the custom crop from the list","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
      console.log(colors.red("Fail"))
      client.back()
  }


  /**************Min Column TestCases********************/
//To check if the user cannot save a field without adding minimum column value
var timeStart = (new Date()).getTime();
console.log(colors.red("Adding min column value"));
const startColumn_1=await findItemById(client,"android.widget.EditText","et_min_columns");
 await setValueEditText(client, startColumn_1,"");
 await waitForActivity(client)
var save_field_without_min_col= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_without_min_col.click()
var timeEnd = (new Date()).getTime();

console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
await waitForActivity(client)
const drive_screen_save_check = await findItemById(client,"android.widget.TextView","tv_drive")

if(drive_screen_save_check == null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check if the user cannot save a field without adding minimum column value","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check if the user cannot save a field without adding minimum column value","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        const field_manager_visibility= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_visibility.click()
        const click_field_created_check= await findItemById(client,"android.view.ViewGroup","cl_container")
        await click_field_created_check.click()
      console.log(colors.red("Fail"))
  }

 
  //To check minimum column value does not accept alphabets
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding min column value1"));
const startColumn_with_alpha=await findItemById(client,"android.widget.EditText","et_min_columns");
 await setValueEditText(client, startColumn_with_alpha,obj.neg_min_col[0]);
var save_field_with_alpha= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_with_alpha.click()
var timeEnd = (new Date()).getTime();

console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
const drive_screen_save_checkk = await findItemById(client,"android.widget.TextView","tv_drive")

if(drive_screen_save_checkk == null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check minimum column value does not accept alphabets","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check minimum column value does not accept alphabets","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        const field_manager_visibility_check= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_visibility_check.click()
        const field_created_check_p1= await findItemById(client,"android.view.ViewGroup","cl_container")
        await field_created_check_p1.click()
      console.log(colors.red("Fail"))
  }
  
  //To check minimum column value does not accept special characters
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding min column value1"));
const startColumn_with_special_char=await findItemById(client,"android.widget.EditText","et_min_columns");
 await setValueEditText(client, startColumn_with_special_char,obj.neg_min_col[1]);
 await waitForActivity(client)
var save_field_with_sc= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_with_sc.click()
var timeEnd = (new Date()).getTime();

console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
await waitForActivity(client)
const drive_screen_save_checkk_sc = await findItemById(client,"android.widget.TextView","tv_drive")

if(drive_screen_save_checkk_sc == null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check minimum column value does not accept special characters","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check minimum column value does not accept special characters","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        const field_manager_visibility_check_sc= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_visibility_check_sc.click()
        const field_created_check_p2= await findItemById(client,"android.view.ViewGroup","cl_container")
        await field_created_check_p2.click()
      console.log(colors.red("Fail"))
  }

  //To check minimum column value does not accept combination of alphabets and special characters
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding min column value1"));
const startColumn_with_combo=await findItemById(client,"android.widget.EditText","et_min_columns");
 await setValueEditText(client, startColumn_with_combo,obj.neg_min_col[2]);
 await waitForActivity(client)
var save_field_with_combo= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_with_combo.click()
var timeEnd = (new Date()).getTime();

console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
await waitForActivity(client)
const drive_screen_save_checkk_combo = await findItemById(client,"android.widget.TextView","tv_drive")

if(drive_screen_save_checkk_combo == null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check minimum column value does not accept special characters","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check minimum column value does not accept special characters","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        const field_manager_visibility_check_c= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_visibility_check_c.click()
        const field_created_check_p3= await findItemById(client,"android.view.ViewGroup","cl_container")
        await field_created_check_p3.click()
      console.log(colors.red("Fail"))
  }

  //To check if minimum column value does not accept spaces as a character
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding min column value1"));
  const startColumn_with_spaces=await findItemById(client,"android.widget.EditText","et_min_columns");
   await setValueEditText(client, startColumn_with_spaces,"  ");
   await waitForActivity(client)
  var save_field_with_spaces= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
  await save_field_with_spaces.click()
  var timeEnd = (new Date()).getTime();
  
  console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
  await waitForActivity(client)
  const drive_screen_save_checkk_spaces = await findItemById(client,"android.widget.TextView","tv_drive")
  
  if(drive_screen_save_checkk_spaces == null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check minimum column value does not accept spaces as a character","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check minimum column value does not accept spaces as a character","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
          const field_manager_visibility_check_spaces= await findItemById(client,"android.widget.TextView","tv_waypoint")
          await field_manager_visibility_check_spaces.click()
          const field_created_check_p4= await findItemById(client,"android.view.ViewGroup","cl_container")
          await field_created_check_p4.click()
        console.log(colors.red("Fail"))
    }

    //To check mim column does not accept 0 as a value
    var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding min column value1"));
  const startColumn_with_zero=await findItemById(client,"android.widget.EditText","et_min_columns");
   await setValueEditText(client,startColumn_with_zero,"0");
   await waitForActivity(client)
  var save_field_with_zero2= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
  await save_field_with_zero2.click()
  var timeEnd = (new Date()).getTime();
  
  console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
  await waitForActivity(client)
  const drive_screen_save_checkk_zero2 = await findItemById(client,"android.widget.TextView","tv_drive")
  
  if(drive_screen_save_checkk_zero2 == null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check min column does not accept 0 as a value","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check min column does not accept 0 as a value","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
          const field_manager_visibility_check_zero_min= await findItemById(client,"android.widget.TextView","tv_waypoint")
          await field_manager_visibility_check_zero_min.click()
          const field_created_check_q8= await findItemById(client,"android.view.ViewGroup","cl_container")
          await field_created_check_q8.click()
        console.log(colors.red("Fail"))
    }

    //To check minmum column accepts maximum of 4 values
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding min column value1"));
  const startColumn_with_max_char=await findItemById(client,"android.widget.EditText","et_min_columns");
   await setValueEditText(client,startColumn_with_max_char,obj.max_col_value);
   await waitForActivity(client)
   var text= await startColumn_with_max_char.getText(); //This will give you the text value in the text field
 console.log(text)
 var l= text.length;  //This will give you the length of the text value
  console.log(l)
  var timeEnd = (new Date()).getTime();
  
  if(l<=4 && l!=4)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check minmum column accepts maximum of 4 characters","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check minmum column accepts maximum of 4 characters","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        console.log(colors.red("Fail"))
    }

//To check if minmum column accepts only numbers
var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding min column value1"));
  const startColumn_with_nos=await findItemById(client,"android.widget.EditText","et_min_columns");
   await setValueEditText(client, startColumn_with_nos,obj.min_column);
   await waitForActivity(client)
  var save_field_with_nos= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
  await save_field_with_nos.click()
  var timeEnd = (new Date()).getTime();
  
  console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
  await waitForActivity(client)
  const drive_screen_save_checkk_nos = await findItemById(client,"android.widget.TextView","tv_drive")
  
  if(drive_screen_save_checkk_nos !== null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check minimum column value accepts only numbers","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    const field_manager_visibility_check_nos= await findItemById(client,"android.widget.TextView","tv_waypoint")
    await field_manager_visibility_check_nos.click()
    const field_created_check_p5= await findItemById(client,"android.view.ViewGroup","cl_container")
    await field_created_check_p5.click()
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check minimum column value accepts only numbers","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        console.log(colors.red("Fail"))
    }


/**********Maximum Column TestCases ***********/
//To check if the user cannot save a field without adding maximum column value
var timeStart = (new Date()).getTime();
console.log(colors.red("Adding min column value"));
const endColumn_1=await findItemById(client,"android.widget.EditText","et_max_columns");
 await setValueEditText(client, endColumn_1,"");
 await waitForActivity(client)
var save_field_without_max_col= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_without_max_col.click()
var timeEnd = (new Date()).getTime();

console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
await waitForActivity(client)
const drive_screen_save_check_max = await findItemById(client,"android.widget.TextView","tv_drive")

if(drive_screen_save_check_max == null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check if the user cannot save a field without adding maximum column value","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check if the user cannot save a field without adding maximum column value","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        const field_manager_visibility_q= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_visibility_q.click()
        const click_field_created_check_q= await findItemById(client,"android.view.ViewGroup","cl_container")
        await click_field_created_check_q.click()
      console.log(colors.red("Fail"))
  }

  //To check max column value does not accept alphabets
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding max column value1"));
const endColumn_with_alpha=await findItemById(client,"android.widget.EditText","et_max_columns");
 await setValueEditText(client,endColumn_with_alpha,obj.neg_max_col[0]);
 await waitForActivity(client)
var save_field_with_alpha_max= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_with_alpha_max.click()
var timeEnd = (new Date()).getTime();

console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
await waitForActivity(client)
const drive_screen_save_checkk_q2 = await findItemById(client,"android.widget.TextView","tv_drive")

if(drive_screen_save_checkk_q2 == null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check max column value does not accept alphabets","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check max column value does not accept alphabets","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        const field_manager_visibility_check_q2= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_visibility_check_q2.click()
        const field_created_check_q2= await findItemById(client,"android.view.ViewGroup","cl_container")
        await field_created_check_q2.click()
      console.log(colors.red("Fail"))
  }
  
  //To check max column value does not accept special characters
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding max column value1"));
const endColumn_with_special_char=await findItemById(client,"android.widget.EditText","et_max_columns");
 await setValueEditText(client, endColumn_with_special_char,obj.neg_max_col[1]);
 await waitForActivity(client)
var save_field_with_sc1= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_with_sc1.click()
var timeEnd = (new Date()).getTime();

console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
await waitForActivity(client)
const drive_screen_save_checkk_sc1 = await findItemById(client,"android.widget.TextView","tv_drive")

if(drive_screen_save_checkk_sc1 == null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check max column value does not accept special characters","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check max column value does not accept special characters","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        const field_manager_visibility_check_sc1= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_visibility_check_sc1.click()
        const field_created_check_q3= await findItemById(client,"android.view.ViewGroup","cl_container")
        await field_created_check_q3.click()
      console.log(colors.red("Fail"))
  }

  //To check maximum column value does not accept combination of alphabets and special characters
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding max column value1"));
const endColumn_with_combo=await findItemById(client,"android.widget.EditText","et_max_columns");
 await setValueEditText(client,endColumn_with_combo,obj.neg_max_col[2]);
 await waitForActivity(client)
var save_field_with_combo_max= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_with_combo_max.click()
var timeEnd = (new Date()).getTime();

console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
await waitForActivity(client)
const drive_screen_save_checkk_combo1 = await findItemById(client,"android.widget.TextView","tv_drive")

if(drive_screen_save_checkk_combo1 == null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check max column value does not accept special characters","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check maximum column value does not accept special characters","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        const field_manager_visibility_check_c1= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_visibility_check_c1.click()
        const field_created_check_q4= await findItemById(client,"android.view.ViewGroup","cl_container")
        await field_created_check_q4.click()
      console.log(colors.red("Fail"))
  }

  //To check if maximum column value does not accept spaces as a character
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding max column value1"));
  const endColumn_with_spaces=await findItemById(client,"android.widget.EditText","et_max_columns");
   await setValueEditText(client, endColumn_with_spaces,"  ");
   await waitForActivity(client)
  var save_field_with_spaces1= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
  await save_field_with_spaces1.click()
  var timeEnd = (new Date()).getTime();
  
  console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
  await waitForActivity(client)
  const drive_screen_save_checkk_spaces1 = await findItemById(client,"android.widget.TextView","tv_drive")
  
  if(drive_screen_save_checkk_spaces1 == null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check maximum column value does not accept spaces as a character","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check maximum column value does not accept spaces as a character","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
          const field_manager_visibility_check_spaces_max= await findItemById(client,"android.widget.TextView","tv_waypoint")
          await field_manager_visibility_check_spaces_max.click()
          const field_created_check_q5= await findItemById(client,"android.view.ViewGroup","cl_container")
          await field_created_check_q5.click()
        console.log(colors.red("Fail"))
    }

    //To check max column does not accept 0 as a value
    var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding max column value1"));
  const endColumn_with_zero=await findItemById(client,"android.widget.EditText","et_max_columns");
   await setValueEditText(client, endColumn_with_zero,"0");
   await waitForActivity(client)
  var save_field_with_zero1= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
  await save_field_with_zero1.click()
  var timeEnd = (new Date()).getTime();
  
  console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
  await waitForActivity(client)
  const drive_screen_save_checkk_zero1 = await findItemById(client,"android.widget.TextView","tv_drive")
  
  if(drive_screen_save_checkk_zero1 == null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check max column does not accept 0 as a value","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check max column does not accept 0 as a value","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
          const field_manager_visibility_check_zero_max= await findItemById(client,"android.widget.TextView","tv_waypoint")
          await field_manager_visibility_check_zero_max.click()
          const field_created_check_q7= await findItemById(client,"android.view.ViewGroup","cl_container")
          await field_created_check_q7.click()
        console.log(colors.red("Fail"))
    }

    //To check max column accepts maximum of 4 values
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding max column value1"));
  const endColumn_with_max_char=await findItemById(client,"android.widget.EditText","et_max_columns");
   await setValueEditText(client,endColumn_with_max_char,obj.max_col_value);
   await waitForActivity(client)
   var text1= await endColumn_with_max_char.getText(); //This will give you the text value in the text field
 console.log(text1)
 var l1= text1.length;  //This will give you the length of the text value
  console.log(l1)
  var timeEnd = (new Date()).getTime();
  
  if(l1<=4 && l1 !==0)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check if max column value accepts maximum of 4 characters","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check if max column value accepts maximum of 4 characters","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        console.log(colors.red("Fail"))
    }

//To check if maximum column accepts only numbers
var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding max column value1"));
  const endColumn_with_nos=await findItemById(client,"android.widget.EditText","et_max_columns");
   await setValueEditText(client,endColumn_with_nos,obj.max_column);
   await waitForActivity(client)
  var save_field_with_nos_max= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
  await save_field_with_nos_max.click()
  var timeEnd = (new Date()).getTime();
  
  console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
  await waitForActivity(client)
  const drive_screen_save_checkk_nos1 = await findItemById(client,"android.widget.TextView","tv_drive")
  
  if(drive_screen_save_checkk_nos1 !== null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check maximum column value accepts only numbers","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    const field_manager_visibility_check_noa1= await findItemById(client,"android.widget.TextView","tv_waypoint")
    await field_manager_visibility_check_noa1.click()
    const field_created_check_q6= await findItemById(client,"android.view.ViewGroup","cl_container")
    await field_created_check_q6.click()
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check maximum column value accepts only numbers","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        console.log(colors.red("Fail"))
    }

/**************Min Range TestCases********************/
//To check if the user cannot save a field without adding minimum range value
var timeStart = (new Date()).getTime();
console.log(colors.red("Adding min range value"));
const startRange_1=await findItemById(client,"android.widget.EditText","et_min_ranges");
 await setValueEditText(client,startRange_1,"");
 await waitForActivity(client)
var save_field_without_min_range= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_without_min_range.click()
var timeEnd = (new Date()).getTime();

console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
await waitForActivity(client)
const drive_screen_save_check_range = await findItemById(client,"android.widget.TextView","tv_drive")

if(drive_screen_save_check_range == null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check if the user cannot save a field without adding minimum range value","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check if the user cannot save a field without adding minimum range value","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        const field_manager_visibility_range= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_visibility_range.click()
        const click_field_created_check_range= await findItemById(client,"android.view.ViewGroup","cl_container")
        await click_field_created_check_range.click()
      console.log(colors.red("Fail"))
  }

 
  //To check minimum range value does not accept alphabets
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding min range value1"));
const startRange_with_alpha=await findItemById(client,"android.widget.EditText","et_min_range");
 await setValueEditText(client, startRange_with_alpha,obj.neg_min_range[0]);
 await waitForActivity(client)
var save_field_with_alpha_mirange= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_with_alpha_mirange.click()
var timeEnd = (new Date()).getTime();

console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
await waitForActivity(client)
const drive_screen_save_checkk_minrange = await findItemById(client,"android.widget.TextView","tv_drive")

if(drive_screen_save_checkk_minrange == null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check minimum range value does not accept alphabets","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check minimum range value does not accept alphabets","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        const field_manager_visibility_check_minrange= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_visibility_check_minrange.click()
        const field_created_check_m1= await findItemById(client,"android.view.ViewGroup","cl_container")
        await field_created_check_m1.click()
      console.log(colors.red("Fail"))
  }
  
  //To check minimum range value does not accept special characters
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding min range value1"));
const startRange_with_special_char=await findItemById(client,"android.widget.EditText","et_min_ranges");
 await setValueEditText(client, startRange_with_special_char,obj.neg_min_range[1]);
 await waitForActivity(client)
var save_field_with_sc_mr= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_with_sc_mr.click()
var timeEnd = (new Date()).getTime();

console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
await waitForActivity(client)
const drive_screen_save_checkk_sc_mr = await findItemById(client,"android.widget.TextView","tv_drive")

if(drive_screen_save_checkk_sc_mr == null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check minimum range value does not accept special characters","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check minimum range value does not accept special characters","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        const field_manager_visibility_check_sc_mr= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_visibility_check_sc_mr.click()
        const field_created_check_mr1= await findItemById(client,"android.view.ViewGroup","cl_container")
        await field_created_check_mr1.click()
      console.log(colors.red("Fail"))
  }

  //To check minimum column value does not accept combination of alphabets and special characters
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding min column value1"));
const startRange_with_combo=await findItemById(client,"android.widget.EditText","et_min_ranges");
 await setValueEditText(client, startRange_with_combo,obj.neg_min_range[2]);
 await waitForActivity(client)
var save_field_with_combo_mr= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_with_combo_mr.click()
var timeEnd = (new Date()).getTime();

console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
await waitForActivity(client)
const drive_screen_save_checkk_combo_mr = await findItemById(client,"android.widget.TextView","tv_drive")

if(drive_screen_save_checkk_combo_mr == null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check minimum range value does not accept special characters","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check mininum range value does not accept special characters","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        const field_manager_visibility_check_cmr= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_visibility_check_cmr.click()
        const field_created_check_p3mr= await findItemById(client,"android.view.ViewGroup","cl_container")
        await field_created_check_p3mr.click()
      console.log(colors.red("Fail"))
  }

  //To check if minimum range value does not accept spaces as a character
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding min range value1"));
  const startRange_with_spaces=await findItemById(client,"android.widget.EditText","et_min_ranges");
   await setValueEditText(client, startRange_with_spaces,"  ");
   await waitForActivity(client)
  var save_field_with_spacesmr= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
  await save_field_with_spacesmr.click()
  var timeEnd = (new Date()).getTime();
  
  console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
  await waitForActivity(client)
  const drive_screen_save_checkk_spacesmr = await findItemById(client,"android.widget.TextView","tv_drive")
  
  if(drive_screen_save_checkk_spacesmr == null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check minimum range value does not accept spaces as a character","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check minimum range value does not accept spaces as a character","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
          const field_manager_visibility_check_spacesme= await findItemById(client,"android.widget.TextView","tv_waypoint")
          await field_manager_visibility_check_spacesme.click()
          const field_created_check_p4mr= await findItemById(client,"android.view.ViewGroup","cl_container")
          await field_created_check_p4mr.click()
        console.log(colors.red("Fail"))
    }

    //To check mim range does not accept 0 as a value
    var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding min range value1"));
  const startRange_with_zero=await findItemById(client,"android.widget.EditText","et_min_ranges");
   await setValueEditText(client,startRange_with_zero,"0");
   await waitForActivity(client)
  var save_field_with_zero21= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
  await save_field_with_zero21.click()
  var timeEnd = (new Date()).getTime();
  
  console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
  await waitForActivity(client)
  const drive_screen_save_checkk_zero21 = await findItemById(client,"android.widget.TextView","tv_drive")
  
  if(drive_screen_save_checkk_zero21 == null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check min range does not accept 0 as a value","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check min range does not accept 0 as a value","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
          const field_manager_visibility_check_zero_min1= await findItemById(client,"android.widget.TextView","tv_waypoint")
          await field_manager_visibility_check_zero_min1.click()
          const field_created_check_q81= await findItemById(client,"android.view.ViewGroup","cl_container")
          await field_created_check_q81.click()
        console.log(colors.red("Fail"))
    }

    //To check min range accepts maximum of 4 values
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding min range value1"));
  const startRange_with_max_char=await findItemById(client,"android.widget.EditText","et_min_ranges");
   await setValueEditText(client, startRange_with_max_char,obj.max_range_value);
   await waitForActivity(client)
   var textt= await startRange_with_max_char.getText(); //This will give you the text value in the text field
 console.log(textt)
 var lt= textt.length;  //This will give you the length of the text value
  console.log(lt)
  var timeEnd = (new Date()).getTime();
  
  if(lt<=4 && lt!=4)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check minmum range accepts maximum of 4 characters","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check minmum range accepts maximum of 4 characters","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        console.log(colors.red("Fail"))
    }

//To check if minmum range accepts only numbers
var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding min range value1"));
  const startRange_with_nos=await findItemById(client,"android.widget.EditText","et_min_ranges");
   await setValueEditText(client, startRange_with_nos,obj.min_range);
   await waitForActivity(client)
  var save_field_with_nosmr= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
  await save_field_with_nosmr.click()
  var timeEnd = (new Date()).getTime();
  
  console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
  await waitForActivity(client)
  const drive_screen_save_checkk_nosmr = await findItemById(client,"android.widget.TextView","tv_drive")
  
  if(drive_screen_save_checkk_nosmr !== null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check minimum range value accepts only numbers","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    const field_manager_visibility_check_nosmr= await findItemById(client,"android.widget.TextView","tv_waypoint")
    await field_manager_visibility_check_nosmr.click()
    const field_created_check_p5mr= await findItemById(client,"android.view.ViewGroup","cl_container")
    await field_created_check_p5mr.click()
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check minimum range value accepts only numbers","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        console.log(colors.red("Fail"))
    }

/**********Maximum Range TestCases ***********/
//To check if the user cannot save a field without adding maximum range value
var timeStart = (new Date()).getTime();
console.log(colors.red("Adding max range value"));
const endRange_1=await findItemById(client,"android.widget.EditText","et_max_ranges");
 await setValueEditText(client, endRange_1,"");
 await waitForActivity(client)
var save_field_without_max_range= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_without_max_range.click()
var timeEnd = (new Date()).getTime();

console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
await waitForActivity(client)
const drive_screen_save_checkk_maxran = await findItemById(client,"android.widget.TextView","tv_drive")

if(drive_screen_save_checkk_maxran == null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check if the user cannot save a field without adding maximum range value","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check if the user cannot save a field without adding maximum range value","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        const field_manager_visibility_qmr= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_visibility_qmr.click()
        const click_field_created_check_qmr= await findItemById(client,"android.view.ViewGroup","cl_container")
        await click_field_created_check_qmr.click()
      console.log(colors.red("Fail"))
  }

 
  //To check max column value does not accept alphabets
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding max range value1"));
const endRange_with_alpha=await findItemById(client,"android.widget.EditText","et_max_range");
 await setValueEditText(client,endRange_with_alpha,obj.neg_max_range[0]);
 await waitForActivity(client)
var save_field_with_alpha_max_range= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_with_alpha_max_range.click()
var timeEnd = (new Date()).getTime();

console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
await waitForActivity(client)
const drive_screen_save_checkk_q2_mr = await findItemById(client,"android.widget.TextView","tv_drive")

if(drive_screen_save_checkk_q2_mr == null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check max range value does not accept alphabets","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check max range value does not accept alphabets","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        const field_manager_visibility_check_q31= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_visibility_check_q31.click()
        const field_created_check_q31= await findItemById(client,"android.view.ViewGroup","cl_container")
        await field_created_check_q31.click()
      console.log(colors.red("Fail"))
  }
  
  //To check max column value does not accept special characters
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding max column value1"));
const endRange_with_special_char=await findItemById(client,"android.widget.EditText","et_max_ranges");
 await setValueEditText(client,endRange_with_special_char,obj.neg_max_range[1]);
 await waitForActivity(client)
var save_field_with_sc1mr= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_with_sc1mr.click()
var timeEnd = (new Date()).getTime();

console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
await waitForActivity(client)
const drive_screen_save_checkk_sc1mr = await findItemById(client,"android.widget.TextView","tv_drive")

if(drive_screen_save_checkk_sc1mr == null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check max range value does not accept special characters","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check max range value does not accept special characters","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        const field_manager_visibility_check_sc1mr= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_visibility_check_sc1mr.click()
        const field_created_check_q3mr= await findItemById(client,"android.view.ViewGroup","cl_container")
        await field_created_check_q3mr.click()
      console.log(colors.red("Fail"))
  }

  //To check maximum range value does not accept combination of alphabets and special characters
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding max range value1"));
const endRange_with_combo=await findItemById(client,"android.widget.EditText","et_max_ranges");
 await setValueEditText(client,endRange_with_combo,obj.neg_max_range[2]);
 await waitForActivity(client)
var save_field_with_combo_maxmr= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
await save_field_with_combo_maxmr.click()
var timeEnd = (new Date()).getTime();

console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
await waitForActivity(client)
const drive_screen_save_checkk_combo1mr = await findItemById(client,"android.widget.TextView","tv_drive")

if(drive_screen_save_checkk_combo1mr == null)
{total_testcases++;
  pass_testcases++;
  testcase_name("SuperTS","Field:To check max range value does not accept special characters","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
  console.log(colors.yellow("Pass"))
  } else{
    total_testcases++;
    fail_testcases++;
      testcase_name("SuperTS","Field:To check maximum range value does not accept special characters","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        const field_manager_visibility_check_c1mr= await findItemById(client,"android.widget.TextView","tv_waypoint")
        await field_manager_visibility_check_c1mr.click()
        const field_created_check_q4mr= await findItemById(client,"android.view.ViewGroup","cl_container")
        await field_created_check_q4mr.click()
      console.log(colors.red("Fail"))
  }

  //To check if maximum column value does not accept spaces as a character
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding max column value1"));
  const endRange_with_spaces=await findItemById(client,"android.widget.EditText","et_max_ranges");
   await setValueEditText(client, endRange_with_spaces,"  ");
   await waitForActivity(client)
  var save_field_with_spaces1mr= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
  await save_field_with_spaces1mr.click()
  var timeEnd = (new Date()).getTime();
  
  console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
  await waitForActivity(client)
  const drive_screen_save_checkk_spaces1mr = await findItemById(client,"android.widget.TextView","tv_drive")
  
  if(drive_screen_save_checkk_spaces1mr == null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check maximum range value does not accept spaces as a character","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check maximum range value does not accept spaces as a character","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
          const field_manager_visibility_check_spaces_maxmr= await findItemById(client,"android.widget.TextView","tv_waypoint")
          await field_manager_visibility_check_spaces_maxmr.click()
          const field_created_check_q5mr= await findItemById(client,"android.view.ViewGroup","cl_container")
          await field_created_check_q5mr.click()
        console.log(colors.red("Fail"))
    }

    //To check max column does not accept 0 as a value
    var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding max column value1"));
  const endRange_with_zero=await findItemById(client,"android.widget.EditText","et_max_ranges");
   await setValueEditText(client, endRange_with_zero,"0");
   await waitForActivity(client)
  var save_field_with_zero1mr= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
  await save_field_with_zero1mr.click()
  var timeEnd = (new Date()).getTime();
  
  console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
  await waitForActivity(client)
  const drive_screen_save_checkk_zero1mr = await findItemById(client,"android.widget.TextView","tv_drive")
  
  if(drive_screen_save_checkk_zero1mr == null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check max range does not accept 0 as a value","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check max range does not accept 0 as a value","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
          const field_manager_visibility_check_zero_maxmr= await findItemById(client,"android.widget.TextView","tv_waypoint")
          await field_manager_visibility_check_zero_maxmr.click()
          const field_created_check_q7mr= await findItemById(client,"android.view.ViewGroup","cl_container")
          await field_created_check_q7mr.click()
        console.log(colors.red("Fail"))
    }

    //To check max column accepts maximum of 4 values
  var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding max column value1"));
  const endRange_with_max_char=await findItemById(client,"android.widget.EditText","et_max_ranges");
   await setValueEditText(client,endRange_with_max_char,obj.max_range_value);
   await waitForActivity(client)
   var text1a= await endRange_with_max_char.getText(); //This will give you the text value in the text field
 console.log(text1a)
 var l1a= text1a.length;  //This will give you the length of the text value
  console.log(l1a)
  var timeEnd = (new Date()).getTime();
  
  if(l1a<=4 && l1a !==0)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check maximum range accepts maximum of 4 characters","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check maximum range accepts maximum of 4 characters","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        console.log(colors.red("Fail"))
    }

//To check if maximum range accepts only numbers
var timeStart = (new Date()).getTime();
  console.log(colors.red("Adding max range value1"));
  const endRange_with_nos=await findItemById(client,"android.widget.EditText","et_max_ranges");
   await setValueEditText(client,endRange_with_nos,obj.max_range);
   await waitForActivity(client)
  var save_field_with_nos_maxr= await findItemById(client,"android.widget.FrameLayout","save_button") //click on Save button
  await save_field_with_nos_maxr.click()
  var timeEnd = (new Date()).getTime();
  
  console.log(colors.red("check if drive screen icon is visible")) //To check if the field has been saved
  await waitForActivity(client)
  const drive_screen_save_checkk_nos1r = await findItemById(client,"android.widget.TextView","tv_drive")
  
  if(drive_screen_save_checkk_nos1r !== null)
  {total_testcases++;
    pass_testcases++;
    testcase_name("SuperTS","Field:To check maximum range value accepts only numbers","Pass",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
    const field_manager_visibility_check_noa1r= await findItemById(client,"android.widget.TextView","tv_waypoint")
    await field_manager_visibility_check_noa1r.click()
    const field_created_check_q6r= await findItemById(client,"android.view.ViewGroup","cl_container")
    await field_created_check_q6r.click()
    console.log(colors.yellow("Pass"))
    } else{
      total_testcases++;
      fail_testcases++;
        testcase_name("SuperTS","Field:To check maximum range value accepts only numbers","Fail",(((timeEnd-timeStart)% 60000) / 1000).toFixed(2))
        console.log(colors.red("Fail"))
    }



  result_table(total_testcases,pass_testcases,fail_testcases)
  
  var script_name= "Field Regression Script"
  var timeOver = (new Date()).getTime(); //End time calculation
 var tot= timeOver-timeBegin;
var seconds =tot/1000;  // Convert msec to seconds 
var minutes =Math.floor(seconds/60);  // Get the minutes value
var sec= seconds % 60;  //Get the sec value
var roundoff=Math.trunc(sec)  //remove the decimal values for seconds

function padTo2Digits(num) {
return num.toString().padStart(2,'0');      //Displays the time in mm:ss format
}

var result= `${padTo2Digits(minutes)}:${padTo2Digits(roundoff)}`;
console.log(result);

  REPORTER.totExecutionTime(seconds,result,script_name);

  
  REPORTER.closeTable();
  await sleep(10000);
  await client.deleteSession();

}


const result_table= (total_testcases,pass_testcases,fail_testcases) =>
{
var total= total_testcases;
var pass= pass_testcases;
var fail= fail_testcases;
 REPORTER.writeResultEntry(total,pass,fail)

}

const testcase_name =(test_id,element,output,time_of_exec) =>{
  var id= test_id
  var test_case=element
  var out= output
  var execution_time = time_of_exec

  REPORTER.writeSummaryEntry(id,test_case,out,execution_time)
 //DATABASE.tableEntry(id,test_case,out,execution_time)
}

const clickItem = async (client, element) => {
var timeStart = (new Date()).getTime();
await element.click();
var timeStop = (new Date()).getTime();
var id = "No ID";
var issue = "-";
try{
  id = await element.getAttribute("resourceId")
}catch(e){
  issue = "No ID found for element.";
}
var clientAct = await client.getCurrentActivity();
REPORTER.writeExecutionTableEntry(clientAct, id, "Click", 'None', timeStop - timeStart, issue);
}


const moveElementByPercentage = async (client, element, px1, py1, px2, py2, msTime) => {
var sizeJson = await element.getSize();
var locJson = await element.getLocation();
var x1 = ((px1/100) * sizeJson.width) + locJson.x;
var y1 = ((py1/100) * sizeJson.height) + locJson.y;
var x2 = ((px2/100) * sizeJson.width) + locJson.x;
var y2 = ((py2/100) * sizeJson.height) + locJson.y;
await moveTouch(client, x1, y1, x2, y2, msTime);
}

const holdTouch = async (client, x1, y1, msTime) => {
await client.touchPerform([
  { action: 'press', options: { x: 300, y: 100 }},
  { action: 'wait', options: { ms: 10000 }},
  { action: 'release' }
]);
}

const holdTouchByPercentage = async(client, element, px1, py1, msTime) => {

var timeStart = (new Date()).getTime();
var sizeJson = await element.getSize();
var locJson = await element.getLocation();
var x1 = ((px1/100) * sizeJson.width) + locJson.x;
var y1 = ((py1/100) * sizeJson.height) + locJson.y;

await client.touchPerform([
  { action: 'press', options: { x: x1, y: y1 }},
  { action: 'wait', options: { ms: msTime }},
  { action: 'moveTo', options: { x: x1, y: y1 }},
  { action: 'release' }
]);
var timeStop = (new Date()).getTime();

REPORTER.writeExecutionTableEntry(await client.getCurrentActivity(), `x:${x1} y:${y1}`, "HoldTouch", `Time : ${String(msTime)}`, timeStop - timeStart, "-");
}


const moveTouch = async (client, x1, y1, x2, y2, msTime) => {
var timeStart = (new Date()).getTime();
await client.touchPerform([
  { action: 'press', options: { x: x1, y: y1 }},
  { action: 'wait', options: { ms: msTime }},
  { action: 'moveTo', options: { x: x2, y: y2 }},
  { action: 'release' }
]);
var timeStop = (new Date()).getTime();
REPORTER.writeExecutionTableEntry(await client.getCurrentActivity(), `x:${x1} y:${y1} -> x:${x2} y:${y2}`, "Move", `Time : ${String(msTime)}`, timeStop - timeStart, "-");

}


const waitForActivity = async (client) => {
var timeStart = (new Date()).getTime();
await client.$("*")
var timeStop = (new Date()).getTime();
REPORTER.writeExecutionTableEntry(await client.getCurrentActivity(), "None", "Wait", "", timeStop - timeStart, "-");
}

const findItemByName = async (client, className, text) => {
var timeStart = (new Date()).getTime();
const items = await client.$$(className);
for (const item of items) { 
  var itemText = (await item.getText());
  if(itemText == null) continue;
  if(itemText == text){
    var timeStop = (new Date()).getTime();
    REPORTER.writeExecutionTableEntry(await client.getCurrentActivity(), `@text/${text}`, "Find", "", timeStop - timeStart, "-");
    return item;
  }
}
var timeStop = (new Date()).getTime();
REPORTER.writeExecutionTableEntry(await client.getCurrentActivity(), `@text/${text}`, "Find", "", timeStop - timeStart, "NOT FOUND");
return null;
}


const findItemById = async (client, className, id) => {
var timeStart = (new Date()).getTime();
const items = await client.$$(className);
for (const item of items) { 
  var itemText = (await item.getAttribute("resourceId"));
  if(itemText == null) continue;
  console.log(colors.cyan("ID : " + itemText));
  if(itemText.includes("id/" + id)){
    var timeStop = (new Date()).getTime();
    REPORTER.writeExecutionTableEntry(await client.getCurrentActivity(), `@id/${id}`, "Find", "", timeStop - timeStart, "-");
    console.log(colors.yellow("Found : " + id));
    return item;
  }
}
var timeStop = (new Date()).getTime();
REPORTER.writeExecutionTableEntry(await client.getCurrentActivity(), `@id/${id}`, "Find", "", timeStop - timeStart, "NOT FOUND");
return null;
}

const findItem = async (client, className) => {
return await client.$(className);
}

const readValueWaitFromElementMatch = async (client, element, matchValue, description, waitTimeMs) => {
var timeStart = (new Date()).getTime();
var waitDivides = parseInt(waitTimeMs/200);
var itemText = "";
for(var i = 0 ; i < waitDivides; i ++){
  itemText = (await element.getText());
  if(String(itemText).replace(" ", "") == String(matchValue).replace(" ", "")){
    break;
  }
  await sleep(200);
}
var timeStop = (new Date()).getTime();
var act = await client.getCurrentActivity();
var itemId = (await element.getAttribute("resourceId"));
REPORTER.writeExecutionTableEntry(await client.getCurrentActivity(), itemId, "ReadValueWait", `Time : ${String(waitTimeMs)}`, timeStop - timeStart, "-");
REPORTER. writeValuesTableEntry(act, `WaitMax(${waitTimeMs}) : ${description}`, itemText, matchValue, timeStop - timeStart);
}



const readValueWaitFromElementRange = async (client, element, lowerValue, higherValue, description, waitTimeMs) => {
var timeStart = (new Date()).getTime();
var waitDivides = parseInt(waitTimeMs/200);
var itemText = "";
for(var i = 0 ; i < waitDivides; i ++){
  try{
    itemText = parseFloat(fixString(await element.getText()));
    if((itemText) <= (higherValue) || (lowerValue) <= (itemText)){
      break;
    }
  }catch(exception){

  }
  await sleep(200);
}
if(String(itemText) == "NaN" || itemText == ""){
  itemText = await element.getText();
}
var timeStop = (new Date()).getTime();
var act = await client.getCurrentActivity();
var itemId = (await element.getAttribute("resourceId"));
REPORTER.writeExecutionTableEntry(await client.getCurrentActivity(), itemId, "ReadRangeWait", `Time : ${String(waitTimeMs)}`, timeStop - timeStart, "-");
REPORTER.writeReadValuesRangeLog(act, `WaitMax(${waitTimeMs}) : ${description}`, itemText, lowerValue, higherValue, timeStop - timeStart);
}


const readValueFromElementMatch = async (client, element, matchValue, description) => {
var timeStart = (new Date()).getTime();
var itemText = (await element.getText());
var timeStop = (new Date()).getTime();
var act = await client.getCurrentActivity();
var itemId = (await element.getAttribute("resourceId"));
REPORTER.writeExecutionTableEntry(await client.getCurrentActivity(), itemId, "ReadValue", '', timeStop - timeStart, "-");
REPORTER. writeValuesTableEntry(act, description, itemText, matchValue, timeStop - timeStart);
//  writeValuesTableEntry = (activity, description, valueRead, expectedValue, msTime)
}

const readValueFromElementRange = async (client, element, lowerValue, higherValue, description) => {
var itemText = parseFloat(fixString(await element.getText()));
// await client.getCurrentActivity() 
// writeReadValuesRangeLog = (activity, description, valueRead, expectedValueLower, expectedValueHigher, msTime)
var timeStart = (new Date()).getTime();
var itemText = (await element.getText());
var timeStop = (new Date()).getTime();
var act = await client.getCurrentActivity();
REPORTER.writeExecutionTableEntry(await client.getCurrentActivity(), itemId, "ReadValue", '', timeStop - timeStart, "-");
REPORTER.writeReadValuesRangeLog(act, description, itemText, lowerValue, higherValue, timeStop - timeStart);

}

const setValueEditText = async (client, element, value) => {
var timeStart = (new Date()).getTime();
await element.setValue(value);
var timeStop = (new Date()).getTime();
var id = "No ID";
var issue = "-";
try{
  id = await element.getAttribute("resourceId")
}catch(e){
  issue = "No ID found for element.";
}
var clientAct = await client.getCurrentActivity();
REPORTER.writeExecutionTableEntry(clientAct, id, "setValue", value, timeStop - timeStart, issue);
}

const findElementByIndex = async (client, className, index) => {
var timeStart = (new Date()).getTime();
const items = await client.$$(className);
var timeStop = (new Date()).getTime();
REPORTER.writeExecutionTableEntry(await client.getCurrentActivity(), `@ALL/${className}`, "Find", `Found ${items.length} items.`, timeStop - timeStart, "-");
return items[index];
}

readAutomationFile = (automationFilePath) => {
var obj = JSON.parse(fs.readFileSync(automationFilePath, 'utf8'));
var keys = Object.keys(obj);
console.log("mission name "+obj.mission_name);        
console.log("Keys "+keys);
return {
    "keys":keys,
    "object":obj
}
}

main();
