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
To learn more, go to https://github.com/alcuadrado/ethereum-hackathon-setup-check
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
                             Happy hacking!
`
  ))
});
