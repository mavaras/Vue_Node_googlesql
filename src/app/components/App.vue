<template>
<div>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <div class="row">
            <div class="col-md7">
                <h1 class="display-4">Innovati assignment</h1>
                <p class="lead">Mario Varas 2019</p>
            </div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col"></div>
            <div class="col">
            <br><br>
            <!-- Button trigger modal -->
            <button type="button" class="btn btn-outline-primary" data-toggle="modal" data-target="#exampleModal">Enunciado</button>

            <!-- Modal -->
            <div class="modal fade bd-example-modal-lg" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Enunciado</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">
                    <p class="text-justify">
                    El objetivo del reto es desarrollar una aplicación web de una sola pantalla que permita:<br><hr>
                    Mostrar un mensaje que diga:<br>
                    ¿Te gustaría realizar una prueba de manejo del nuevo Toyota Corolla?<br>
                    Si estas interesado, por favor indícanos la fecha y hora en la cual podrías recibirnos y el lugar al cual quieres<br>
                    que te llevemos este auto para realizar la prueba de manejo.<br>
                    <br>
                    Luego pedir:<br>
                    Fecha de la prueba:<br>
                    Hora de la prueba:<br>
                    Lugar:<br>
                    Teléfono:<br><hr>
                    Debes colocar un botón grabar y hacer que los datos se almacenen en una base de datos Google.<br>
                    Debes utilizar Bootstrap, Vue.JS y Node JS para desarrollar la aplicación.<br>
                    Debes publicar la aplicación en Google Cloud.<br>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
            </div>
        </div>
    </div>
    <nav class="nav justify-content-center">
      <div class="nav nav-tabs" id="nav-tab" role="tablist" style="margin-bottom: 40px">
        <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Submit</a>
        <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">View</a>
      </div>
    </nav>
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
          <div class="container">
              <h4>¿Te gustaría realizar una prueba de manejo del nuevo Toyota Corolla?</h4>
              <p class="text-md-left">
              Si estas interesado, por favor indícanos la fecha y hora en la cual podrías recibirnos y el lugar al cual quieres que te llevemos este auto para realizar la prueba de manejo.
              </p>
              <div class="row pt-5">
                  <div class="col-md">
                      <div class="card">
                      <div class="card-body">
                      <form @submit.prevent="add_test">
                          <div class="form-group row">
                            <label for="example-text-input" class="col-2 col-form-label">Fecha</label>
                            <div class="col-10">
                              <input required="true" v-model="test.date" class="form-control" type="date" id="example-text-input">
                            </div>
                          </div>
                          <div class="form-group row">
                            <label for="example-text-input" class="col-2 col-form-label">Hora</label>
                            <div class="col-10">
                              <input required="true" v-model="test.time" class="form-control" type="time" id="example-text-input">
                            </div>
                          </div>
                          <div class="form-group row">
                            <label for="example-text-input" class="col-2 col-form-label">Lugar</label>
                            <div class="col-10">
                                <textarea required="true" v-model="test.place" cols="10" rows="3" placeholder="Lugar de la prueba" class="form-control">
                                </textarea>
                            </div>
                          </div>
                          <div class="form-group row">
                            <label for="example-text-input" class="col-2 col-form-label">Teléfono</label>
                            <div class="col-10">
                              <input required="true" v-model="test.phone" class="form-control" type="tel" placeholder="Teléfono de contacto" id="example-text-input">
                            </div>
                          </div>
                          <hr><br>
                          <button class="btn btn-primary btn-block">Submit</button>
                      </form>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
          <div class="container">
                  <table class="table">
                      <thead>
                          <tr>
                              <th>Date</th>
                              <th>Time</th>
                              <th>Place</th>
                              <th>Phone</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr v-for="test of tests">
                              <td>{{test.date}}</td>
                              <td>{{test.time}}</td>
                              <td>{{test.place}}</td>
                              <td>{{test.phone}}</td>
                          </tr>
                      </tbody>
                  </table>
          </div>
      </div>
    </div>
</div>
</template>
<script>
    const Test = require("../../models/Test");

    export default {
        data() {
            return {
                test: new Test('','','',''),
                tests: []
            }
        },
        created() {
            this.get_tests();
        },
        methods: {
            get_tests() {
                fetch("/urls/db/get")
                .then(res => res.json())
                .then(data => {
                    this.tests = data;
                    console.log(this.tests);
                });
            },
            add_test() {
                console.log(this.test);

                // sending data to server
                fetch('/urls/db/insert', {
                    method: 'POST',
                    body: JSON.stringify(this.test),
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json'
                    }
                })
                .then(res => res.json())
                .then(function (data) {
                    console.log(data);
                    alert("Datos registrados correctamente en la base de datos Google SQL");
                })
                .catch(function(error) {
                    alert("Error insertando en la base de datos Google SQL\nentrada duplicada");
                });
                this.get_tests();
            }
        }
    }
</script>
