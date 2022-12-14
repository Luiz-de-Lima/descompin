//getFolders
//saveFOlders
//savePinFolders

const generateId = () => {
  return `${Math.floor(Math.random() * 100_000).toString(16)}-${Math.floor(
    Math.random() * 100_000
  ).toString(16)}`;
};

const saveFolders = async (folders) => {
  localStorage.setItem("folders", JSON.stringify(folders));
};
export const getFolders = async () => {
  return JSON.parse(localStorage.getItem("folders")) || [];
};

export const saveFolder = async (folderName) => {
  const folders = await getFolders();

  const newFolder = { id: generateId(), name: folderName, pins: [] };

  folders.push(newFolder);
  await saveFolders(folders);
  return newFolder;
};

export const savePinFolder = async (folderId, pinId) => {
  //listar coleção array de pastas
  //buscar a pasta que queremos add o pin
  //add o pin na pasta
  //salvar novamento no storage

  const folders = await getFolders();
  const folderIndex = folders.findIndex((folder) => {
    return folder.id === folderId;
  });
  if (folderIndex !== -1) {
    folders[folderIndex].pins.push(pinId);
  }
  await saveFolders(folders);
  return { ...folders[folderIndex] };
};

export const getPins = async () => {
  return [{
    id: '123',
    title: 'trigonometria',
    image: 'https://picsum.photos/208/300?58',
    total: 0
  },
  {
    id: '133',
    title: 'Js',
    image: 'https://picsum.photos/208/300?53',
    total: 0
  }, {
    id: '134',
    title: 'React',
    image: 'https://picsum.photos/208/300?55',
    total: 0
  }]
}
