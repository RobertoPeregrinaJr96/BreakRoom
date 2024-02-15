// create, read, update, delete

const createEntry = async (Table, body) => {
  try {
    const newBody = await Table.create(...body);
    await newBody.save();
  } catch (error) {
    console.log(`Error: ${error} in CreatEntry`);
    return false;
  }
  return true;
};

module.exports = {
  createEntry,
};
