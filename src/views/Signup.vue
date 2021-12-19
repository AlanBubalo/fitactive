<template>
  <div class="signup">
    <h1>Signup</h1>
    <div class="container">
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm">
          <form>
            <div class="form-group">
              <label for="exampleInputName">Name</label>
              <input
                type="name"
                class="form-control"
                id="exampleInputName"
                aria-describedby="NameHelp"
                placeholder="First Name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputSurname">Surname</label>
              <input
                type="surname"
                class="form-control"
                id="exampleInputSurname"
                aria-describedby="SurnameHelp"
                placeholder="Last Name"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-fit">Sign up</button>
          </form>
        </div>
        <div class="col-sm"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.signup {
  margin-top: 20px;
}
</style>
