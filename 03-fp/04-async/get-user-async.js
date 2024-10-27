async function getUser(userID) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userID}`
  );

  if (!response.ok) {
    throw new Error(`${response.status} Error`);
  }

  return response.json();
}

console.log("--- Start ---");

async function main() {
  try {
    const user = await getUser(2);
    console.log(user);
  } catch (error) {
    console.error(error);
  } finally {
    console.log("--- Completed ---");
  }
}

main();
