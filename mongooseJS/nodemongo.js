 
const mongoose=require('mongoose')
mongoose.connect("mongodb://0.0.0.0:27017/mongooseJS")
.then(()=> console.log("connection is successful...."))
.catch((err)=> console.log(err));


const studentSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
        minlengt: 2,
        maxlength:40,

    },
    email:{
        type:String && Number ,
        

       
    },
    grade:String,
    Class:String || Number,
    Roll_No:String,
    Graduate:Boolean,
    course:String,
    active:Boolean,
    fee : Number,
    Branch : String,
    date:{
        type:Date,
        default:Date.now
    }
})

const Student = new mongoose.model("Student", studentSchema);

/**Create document or insert */

const collegestudent= new Student ({
    name: "Niraditya",
    grade : "A",
    Class: 'B.tech',
    Roll_No : 1741910027,
    Gradute : true,
    course : 'cse',
       fee : 490000
    
});

collegestudent.save();

const createDocument = async () =>  {
    try{
        const student= new Student ({
            name: "Ranjeet",
            grade : "A",
            Class: 'B.tech',
            Roll_No : 1741910028,
            Gradute : true,
            course : 'ME',
               fee : 520000

            
        })
        const student1= new Student ({
            name: "Sandeep",
            grade : "B",
            Class: 'B.tech',
            Roll_No : 1741910029,
            Gradute : true,
            course : 'EE',
               fee : 510000
            
        })
        const student2= new Student ({
            name: "Puja",
            grade : "B",
            Class: 'B.tech',
            Roll_No : 1741910030,
            Gradute : true,
            course : 'CE',
             fee : 500000
        })
        const student3= new Student ({
            name: "Mamta",
            grade : "C",
            Class: 'B.tech',
            Roll_No : 1741910031,
            Gradute : true,
            course : 'cse',
               fee : 480000
            
        })
        
        const result = await Student.insertMany([student1, student2, student3]);
                console.log(result);
    }catch(err) {
        console.log(err);
    }
}
//createDocument();



/**Read  document */

const getDocument =async () => {
    try{
    const result = await Student
     .find({$or : [{course : "cse"}, {course : "ME"}]})
    //.find({name:"Niraditya"})
    //.find({fee: {$lte : 50000}})
    //.find({grade : {$in : ["A", "B"]}});
    .select({name:1})
    //.limit(2);
    //.countDocuments();
    .sort("name : 1");
    console.log(result);
}catch(err){
    console.log(err)
}
}
//getDocument();


const updateDocument = async (_id) => {
    try{
        const result = await Student.findByIdAndUpdate({_id}, {
            $set : {
                name:"Niraditya Kumar"
            }
        }) ;
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
//updateDocument("61f0dfbf9b6dff93e44392e0")



/**Delete Document*/

const deleteDocument = async (_id)=> {
    try{
        const result = await Student.deleteMany({_id});
         console.log(result);
    }catch(err){
        console.log(err)
    }
}
deleteDocument(("61f0dfbf9b6dff93e44392e3"), ("61f0dfbf9b6dff93e44392e2"));