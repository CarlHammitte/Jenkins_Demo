const promiseF1 = new Promise((resolve,reject)=>{



    //console.log("in promise")



    setTimeout(()=>{



       // console.log("done")



        resolve(7);



    }, 2000);



})







const f1 = (num, num2)=>{



    return new Promise((resolve,reject)=>{



        console.log("called f1")



        setTimeout( ()=> {



            //num = f2()



            console.log('timeout completed');



            resolve(num + num2);



        }, 2000); 



    })



}

