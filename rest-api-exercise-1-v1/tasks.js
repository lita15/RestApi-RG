function task1() {
  return fetch("http://localhost:3000");

  // TODO: replace this
}

async function task2() {
  fetch("http://localhost:3000/task2", {
    method: "PATCH",
  });
  const a = "password";
  return a;
}

function task3() {
  return fetch("http://localhost:3000/task3?user_id=3&role=admin", {
    method: "POST",
  });
}

function task4() {
  const body = {
    username: "admin",
    password: "password",
  };
  return fetch("http://localhost:3000/task4", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
}

export { task1, task2, task3, task4 };
