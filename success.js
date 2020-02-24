const chalk = require("chalk");
const checkEngines = require("check-engines");
const package = require("./package.json");

checkEngines(err => {
  if (err) {
    console.error(
      chalk.red(
        `You have Node.js ${process.version} installed, and need a ${package.engines.node} version.`
      )
    );

    console.error(
      chalk.cyan(
        `
Please upgrade your Node.js installation or reinstall it with a newer version and restart this terminal.
To learn how to do it go to https://github.com/nomiclabs/ethereum-hackathon-setup-checker
`
      )
    );

    process.exit(1);
  }

  console.log(chalk.green(
`
                                   %                   
                                 //%%                  
                                ///%%%                
                               ////%%%%              
                              /////%%%%%              
                             //////%%%%%%             
                            ///////%%%%%%%            
                           ////////%%%%%%%%         
                          /////////%%%%%%%%%      
                         //////////%%%%%%%%%%       
                        ///////////%%%%%%%%%%%      
                       ////////////%%%%%%%%%%%%      
                      ///////////%%&@@%%%%%%%%%%  
                     ////////%%%%%%&@@@@@@%%%%%%%   
                    /////%%%%%%%%%%&@@@@@@@@@@%%%%  
                   /%%%%%%%%%%%%%%%&@@@@@@@@@@@@@@%
                  /%%%%%%%%%%%%%%%%&@@@@@@@@@@@@@@@@
                  %%%%%%%%%%%%%%%%%&@@@@@@@@@@@@@@@@@   
                      %%%%%%%%%%%%%&@@@@@@@@@@@@@      
                  /       %%%%%%%%%&@@@@@@@@@       % 
                   ///       %%%%%%&@@@@@@       %%%  
                    //////      %%%&@@@      %%%%%%    
                      ///////      *      %%%%%%%     
                       /////////       %%%%%%%%%       
                        ///////////#%%%%%%%%%%%        
                          /////////#%%%%%%%%%         
                           ////////#%%%%%%%%           
                            ///////#%%%%%%%            
                              /////#%%%%%              
                               ////#%%%%              
                                 //#%%                
                                  /#%
                                   %


                            You are all set!
                   Nomic Labs wishes you happy hacking!
`
  ))
});
