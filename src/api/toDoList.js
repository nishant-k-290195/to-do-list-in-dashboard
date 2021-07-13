import { toDoListRef } from '../firebase'

// CRUD 

// create post

export const createItem = async (uid, content) => {
  try{
    await toDoListRef.push({
      createdBy: uid,
      content
    })
  }catch(err){
    console.log(err)
  }
}


// export const fetchToDoList= async () => {
//   try{
//     toDoListRef.on('value', snapshot => {
//       const data = snapshot.val();
//       return data
//     })
    
//   }catch(err){
//     console.log(err)
//   }
// }

export const updateItem = async (uid, toDoItem) => {
  await toDoListRef.once('toDoItem', snap => snap.val())
}

export const deleteItem = async (uid, toDoItem) => {
  await toDoListRef.once('toDoItem', snap => snap.val())
}

export const deleteItems = async (uid, toDoItem) => {
  await toDoListRef.once('toDoItem', snap => snap.val())
}