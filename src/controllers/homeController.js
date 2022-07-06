import db from '../models/index';
import CRUDService from '../services/CRUDService';

let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
        // console.log('-------------------')
        // console.log(data)
        // console.log('-------------------')
        return res.render('homepage.ejs', {
            data: JSON.stringify(data)
        });
    } catch (e) {
        console.log(e)
    }

}

let getAboutPage = (req, res) => {
    return res.render('test/about.ejs');
}

let getCRUD = (req, res) => {
    // return res.send('Get CRUD check')
    return res.render('crud.ejs');
}
let postCRUD = async (req, res) => {
    let message = await CRUDService.createNewUser(req.body);
    console.log(message);
    // console.log(req.body);
    return res.send('post crud from server');
}
let displayGetCRUD = async (req, res) => {
    let data = await CRUDService.getAllUser();
    // console.log('------------------')
    // console.log(data)
    // console.log('------------------')
    // return res.send('get crud from server');
    return res.render('displayCRUD.ejs', {
        dataTable: data
    });
}
let getCEditRUD = async (req, res) => {
    // console.log(req.query.id);
    let userId = req.query.id;
    if (userId) {
        let userData = await CRUDService.getUserById(userId);

        return res.render('editCRUD.ejs', {
            user: userData
        });
        // console.log('------------')
        // console.log(userData)
        // console.log('------------')
        // return res.send('Edit user from edit page!')
    }
    else {
        return res.send('User not found!')
    }
}
let putCRUD = async (req, res) => {
    let data = req.body;
    let allUsers = await CRUDService.updateUser(data);
    return res.render('displayCRUD.ejs', {
        dataTable: allUsers
    });
    // return res.send('Update succesed!');
}
let deleteCRUD = async (req, res) => {
    let id = req.query.id;
    if (id) {
        await CRUDService.deleteUser(id);
        return res.send('Delete succesed!')
    }
    else {
        return res.send('User not found!')
    }

}
module.exports = {
    getHomePage: getHomePage,
    getAboutPage: getAboutPage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
    displayGetCRUD: displayGetCRUD,
    getCEditRUD: getCEditRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,


}