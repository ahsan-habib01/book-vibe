import { toast } from 'react-toastify';

const getStoredBook = () => {
  const storedBookSTR = localStorage.getItem('readList');

  if (storedBookSTR) {
    const storedBookData = JSON.parse(storedBookSTR);
    return storedBookData;
  } else {
    return [];
  }
};

const addToStoredDB = id => {
  const storedBookData = getStoredBook();

  if (storedBookData.includes(id)) {
    toast.info('Already Added!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
      // transition: Bounce,
    });
  } else {
    storedBookData.push(id);
    let data = JSON.stringify(storedBookData);
    localStorage.setItem('readList', data);
    // console.log(storedBookData);
  }
};
export { addToStoredDB, getStoredBook };
