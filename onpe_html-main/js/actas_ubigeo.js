function agregarInformacion(ubigeo) {
const apiUrl = `https://oaemdl.es/onpe_sweb_php/actas/numero/${ubigeo}`;
{try
        const response = await fetch(url);
        if (response.status === 200) {
            const ubigeo = (await response.json()).data;

            let html = `
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
                                    <td>${ubigeo.idGrupoVotacion}</td>
                                    <td>${ubigeo.nCopia}</td>
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
                                    <td>${ubigeo.Departamento}</td>
                                    <td>${ubigeo.Provincia}</td>
                                    <td>${ubigeo.Distrito}</td>
                                    <td>${ubigeo.RazonSocial}</td>
                                    <td>${ubigeo.Direccion}</td>
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
                                    <td>${ubigeo.ElectoresHabiles}</td>
                                    <td>${ubigeo.TotalVotantes}</td>
                                    <td>ACTA ELECTORAL NORMAL</td>
                                </tr>
                            </tbody>
                        </table>
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
                                            <td>${ubigeo.P1}</td>
                                          </tr>
                                          <tr>
                                            <td>FUERZA POPULAR</td>
                                            <td><img width="40px" height="40px" src="images/simbolo_keyko.jpg"></td>
                                            <td>${ubigeo.P2}</td>
                                          </tr>
                                          <tr>
                                            <td colspan="2">VOTOS EN BLANCO</td>
                                            <td>${ubigeo.VotosBlancos}</td>
                                          </tr>
                                          <tr>
                                            <td colspan="2">VOTOS NULOS</td>
                                            <td>${ubigeo.VotosNulos}</td>
                                          </tr>
                                          <tr>
                                            <td colspan="2">VOTOS IMPUGNADOS</td>
                                            <td>${ubigeo.VotosImpugnados}</td>
                                          </tr>
                                          <tr>
                                            <td colspan="2">TOTAL DE  VOTOS EMITIDOS</td>
                                            <td>${ubigeo.P1}  +  ${ubigeo.P2}  +  ${ubigeo.VotosBlancos}  +  ${ubigeo.VotosNulos}  +  ${ubigeo.VotosImpugnados}</td>
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
            document.getElementById('contenedor').innerHTML=html;
        }
    }
}
