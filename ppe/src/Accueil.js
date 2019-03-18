import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import('../src/scss/vendor/datatables/jquery.dataTables')

class Accueil extends Component {

  render() {

    return (
      <div>
      <head>

        <title>Noxa</title>

      </head>
          <body id="page-top">

            <nav class="navbar navbar-expand navbar-dark bg-dark static-top">

              <a class="navbar-brand" >
              
              <Link to='/'>Noxa</Link>
                
              </a>

              <button class="btn btn-link btn-sm text-white order-1 order-sm-0" id="sidebarToggle" href="#">
                <i class="fas fa-bars"></i>
              </button>


              <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2"></input>
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="button">
                      <i class="fas fa-search"></i>
                    </button>
                  </div>
                </div>
              </form>

              <ul class="navbar-nav ml-auto ml-md-0">

                <li class="nav-item dropdown no-arrow">
                  <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-user-circle fa-fw"></i>
                  </a>
                  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <a class="dropdown-item" href="#">Settings</a>
                    <a class="dropdown-item" href="#">Activity Log</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">Logout</a>
                  </div>
                </li>
              </ul>

            </nav>

            <div id="wrapper">

              <ul class="sidebar navbar-nav">
                <li class="nav-item active">
                  <a class="nav-link" >
                  <Link to='/'>Accueil</Link>
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    
                  </a>
                </li>

                <li class="nav-item">
                <a class="nav-link" >
                <Link to='/charts'>Graphiques</Link>
                <i class="fas fa-fw fa-table"></i>
                </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" >
                  <Link to='/tables'>Tableaux</Link>
                    <i class="fas fa-fw fa-table"></i>
                    </a>
                </li>
              </ul>

              <div id="content-wrapper">

                <div class="container-fluid">




                  <div class="card mb-3">
                    <div class="card-header">
                      <i class="fas fa-chart-area"></i>
                      Mots clés utilisé</div>
                    <div class="card-body">

                    </div>
                    <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                  </div>


                  <div class="card mb-3">
                    <div class="card-header">
                      <i class="fas fa-chart-area"></i>
                      Argent obtenus</div>
                    <div class="card-body">

                    </div>
                    <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                  </div>

                  <div class="card mb-3">
                    <div class="card-header">
                      <i class="fas fa-chart-area"></i>
                      Autre Widget </div>
                    <div class="card-body">

                    </div>
                    <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                  </div>


                  <div class="card mb-3">
                    <div class="card-header">
                      <i class="fas fa-table"></i>
                      Resultat</div>
                    <div class="card-body">
                      <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                          <thead>
                            <tr>
                              <th>ID du cas</th>
                              <th>Mots clés</th>
                              <th>Stat1 </th>
                              <th>Stat2</th>
                              <th>Stat3</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tfoot>
                            <tr>
                              <th>ID du cas</th>
                              <th>Mots clés</th>
                              <th>Stat1 </th>
                              <th>Stat2</th>
                              <th>Stat3</th>
                              <th>Date</th>
                            </tr>
                          </tfoot>
                          <tbody>

                            <tr>
                              <td>1589564892</td>
                              <td>MOTS_CLE</td>
                              <td>STAT_1</td>
                              <td>STAT2</td>
                              <td>STAT_3</td>
                              <td>14/01/1997</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                  </div>

                </div>

                <footer class="sticky-footer">
                  <div class="container my-auto">
                    <div class="copyright text-center my-auto">
                      <span>Copyright © NoxaPPE</span>
                    </div>
                  </div>
                </footer>

              </div>


            </div>



            <a class="scroll-to-top rounded" href="#page-top">
              <i class="fas fa-angle-up"></i>
            </a>


            <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                  <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" href="login.html">Logout</a>
                  </div>
                </div>
              </div>
            </div>


            <script src="vendor/jquery/jquery.min.js"></script>
            <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


            <script src="vendor/jquery-easing/jquery.easing.min.js"></script>


            <script src="vendor/chart.js/Chart.min.js"></script>
            <script src="vendor/datatables/jquery.dataTables.js"></script>
            <script src="vendor/datatables/dataTables.bootstrap4.js"></script>


            <script src="js/sb-admin.min.js"></script>


            <script src="js/demo/datatables-demo.js"></script>
            <script src="js/demo/chart-area-demo.js"></script>

          </body>

      </div>

    );
}

}





export default Accueil;
