async function getNumero(nroMesa) {
  const url = `https://oaemdl.es/onpe_sweb_php/actas/numero/${nroMesa}`; // URL de la API
  try {
      const response = await fetch(url);
      if (response.status === 200) {
          const numero = (await response.json()).data;

          
          let html = `
        <div class="tab-info">EL NÚMERO DE MESA QUE HA INGRESADO NO EXISTE</div>

                      <div class="tab-content">
                        <div id="detMesa">
                          <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="presidencial">
                              <div class="tab-info-desc">

                                <div class="row">

                                  <div class="col-xs-3 col-md-4">
                                    <div class="mesap01">
                                        <img src="images/mp-sin.jpg" class="img-responsive">
                                        Si requiere la imagen del acta, solicítela a través del procedimiento de acceso a la información pública.
                                    </div>
                                  </div>

                                  <div class="col-xs-9 col-md-8">
                                    <div class="row">

                                      <div class="col-xs-12">
                                        <p class="subtitle1">ACTA ELECTORAL</p>
                                        <div id="page-wrap">
                                          <table class="table13" cellspacing="0">
                                            <thead>
                                              <tr>
                                                <th>Mesa N°</th>
                                                <th>N° Copia</th>
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td>${numero.idGrupoVotacion}</td>
                                                <td>${numero.nCopia}</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>

                                      <div class="col-xs-12">
                                        <p class="subtitle1">INFORMACIÓN UBIGEO</p>
                                        <div id="page-wrap">
                                          <table class="table14" cellspacing="0">
                                            <tbody>
                                              <tr class="titulo_tabla">
                                                <td>Departamento</td>
                                                <td>Provincia</td>
                                                <td>Distrito</td>
                                                <td>Local de votación</td>
                                                <td>Dirección</td>
                                              </tr>
                                              <tr>
                                                <td>${numero.Departamento}</td>
                                                <td>${numero.Provincia}</td>
                                                <td>${numero.Distrito}</td>
                                                <td>${numero.RazonSocial}</td>
                                                <td>${numero.Direccion}</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>

                                      <div class="col-xs-12">
                                        <p class="subtitle1">INFORMACIÓN MESA</p>
                                        <div id="page-wrap">
                                          <table class="table15" cellspacing="0">
                                            <tbody>
                                              <tr class="titulo_tabla">
                                                <td>Electores hábiles</td>
                                                <td>Total votantes</td>
                                                <td>Estado del acta</td>
                                              </tr>
                                              <tr>
                                                <td>${numero.ElectoresHabiles}</td>
                                                <td>${numero.TotalVotantes}</td>
                                                <td>ACTA ELECTORAL NORMAL</td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>

                                    </div>

                                  </div>
                                </div>

                                <div>
                                  <div class="col-xs-12 pbot30_acta">
                                    <p class="subtitle1">LISTA DE RESOLUCIONES</p>
                                    <span class="glyphicon glyphicon-info-sign" aria-hidden="true"></span> No hay resoluciones para el acta seleccionada
                                    <div id="page-wrap">
                                        <div class="col-md-12 resolu"></div>
                                    </div>
                                    <!-- <p class="centro"># : El valor consignado en el acta presenta ilegibilidad.</p> -->
                                  </div>
                                </div>

                                <div>
                                  <div class="col-xs-12">
                                    <p class="subtitle1">INFORMACIÓN DEL ACTA ELECTORAL</p>
                                    <div id="page-wrap" class="cont-tabla1">
                                      <table class="table06">
                                        <tbody>
                                          <tr class="titulo_tabla">
                                            <td colspan="2">Organización política</td>
                                            <td>Total de Votos</td>
                                          </tr>
                                          <tr>
                                            <td>PERUANOS POR EL KAMBIO</td>
                                            <td><img width="40px" height="40px" src="images/simbolo_pkk.jpg"></td>
                                            <td>${numero.P1}</td>
                                          </tr>
                                          <tr>
                                            <td>FUERZA POPULAR</td>
                                            <td><img width="40px" height="40px" src="images/simbolo_keyko.jpg"></td>
                                            <td>${numero.P2}</td>
                                          </tr>
                                          <tr>
                                            <td colspan="2">VOTOS EN BLANCO</td>
                                            <td>${numero.VotosBlancos}</td>
                                          </tr>
                                          <tr>
                                            <td colspan="2">VOTOS NULOS</td>
                                            <td>${numero.VotosNulos}</td>
                                          </tr>
                                          <tr>
                                            <td colspan="2">VOTOS IMPUGNADOS</td>
                                            <td>${numero.VotosImpugnados}</td>
                                          </tr>
                                          <tr>
                                            <td colspan="2">TOTAL DE  VOTOS EMITIDOS</td>
                                            <td>${numero.P1}  +  ${numero.P2}  +  ${numero.VotosBlancos}  +  ${numero.VotosNulos}  +  ${numero.VotosImpugnados}</td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </div>
                                  </div>

                                </div>

                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
        `;
          document.getElementById('contenido-resultados').innerHTML = html;
      } else {
          document.getElementById('contenido-resultados').innerHTML = `<p>Error: No se encontró el número de mesa</p>`;
      }
  } catch (error) {
      console.error("Error en la solicitud:", error);
      document.getElementById('contenido-resultados').innerHTML = `<p>Error al conectar con la API</p>`;
  }
}

function actas_bscarPrNmroMesa(form) {
  const nroMesa = form["nroMesa"].value;

  if (nroMesa === "") {
      alert("Ingrese un número de acta");
      return;
  }
  if (isNaN(nroMesa)) {
      alert("Ingrese un número de acta válido");
      return;
  }
  if (nroMesa.length < 6) {
      alert("No es un número de acta válido");
      return;
  }

  // Llama a getNumero con el nroMesa ingresado
  getNumero(nroMesa);
}
