const db = require("../../data/db-config");

/**
  resolves to an ARRAY with all users, each user having { user_id, username }
 */
function get() {
  return db("users").select("user_id", "username");
}

/**
  resolves to an ARRAY with all users that match the filter condition
 */
function getBy(filter) {
  return db("users").where(filter).select("user_id", "username");
}

/**
  resolves to the user { user_id, username } with the given user_id
 */
function getById(user_id) {
  return db("users").where("id", user_id).first().select("user_id", "username");
}
/**
  resolves to the newly inserted user { user_id, username }
 */
async function add(user) {
  const [user_id] = await db("users").insert(user);
  const newUser = getById(user_id);
  return newUser;
}
// Don't forget to add these to the `exports` object so they can be required in other modules
module.exports = {
  get,
  getBy,
  getById,
  add,
};
