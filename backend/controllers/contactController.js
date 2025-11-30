const Message = require('../models/contactModel');

const submitMessage = async(req, res) => {
    const {name, email, message} = req.body;

    if(!name || !email || !message) {
        return res.status(400).json({message: 'All fields are required'});
    }

    try{
        const newMessage = await Message.create({name, email, message});
        /*const newMessage = new Message({name, email, message});
        await newMessage.save();*/
        console.log(`NEW MESSAGE SAVED: ${newMessage._id}`);
        res.status(201).json({success: true,message: 'Message sent successfully'});
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'});
    }

};

const getMessages = async(req, res) => {
    //find all message docs and sort them by D&T(-1 determine the descending order)
    try{
        const messages = await Message.find({}).sort({receivedAt: -1});
        res.status(200).json(messages);
    }
    catch(error){
        console.error(error);
        res.status(500).json({message: 'Internal Server Error'});  
    }
};

module.exports = {submitMessage, getMessages,};


