// export const domain = "http://localhost:3001";

// export const domain = "https://ngage-backend.onrender.com";

export const domain = "http://3.108.221.195:3001"; // AWS FOR PRODUCTION




export const endPoints = {
  signup: "/api/auth/signup",
  login: "/api/auth/login",
  fetchUsers: "/api/auth/fetchUsers",
  updateUser: '/api/auth/updateUser',
  
  
  // Shops
  createNewShopProduct  : '/api/shop/createNewShopProduct',
  fetchShopProducts  : '/api/shop/fetchShopProducts',
  editShopProduct  : '/api/shop/editShopProduct',
  deleteShopProduct  : '/api/shop/deleteShopProduct',

  
  //Community and Posts
  createPost  : '/api/post/createPost',
  fetchPosts  : '/api/post/fetchPosts',
  likePost : '/api/like/likePost',
  unlikePost : '/api/like/unlikePost',
  deletePost : '/api/post/deletePost',
  fetchPostById : '/api/post/fetchPostById',

  //Post Comments
  fetchComment: '/api/comment/fetchComment',
  createComment : '/api/comment/createComment',
  deleteComment : '/api/comment/deleteComment',

  //Recreation
  fetchRecreations :  '/api/recreation/fetchRecreations',
  createRecreation :  '/api/recreation/createRecreation',
  updateRecreation :  '/api/recreation/updateRecreation',
  deleteRecreation :  '/api/recreation/deleteRecreation',
  
  // Recreation  Milestone 
  createRecreationMileStone :  '/api/recreationMilestone/createRecreationMileStone',
  updateRecreationMileStone :  '/api/recreationMilestone/updateRecreationMileStone',
  deleteRecreationMileStone :  '/api/recreationMilestone/deleteRecreationMileStone',

  //Training
  createTraining :  '/api/training/createTraining',
  fetchTrainings :  '/api/training/fetchTrainings',
  updateTraining :  '/api/training/updateTraining',
  deleteTraining :  '/api/training/deleteTraining',


  //Training Tasks 
  createTrainingTask : '/api/trainingTask/createTrainingTask',
  updateTrainingTask : '/api/trainingTask/updateTrainingTask',
  deleteTrainingTask : '/api/trainingTask/deleteTrainingTask',



   

  



   




};
