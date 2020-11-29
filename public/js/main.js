function addProduct(){
    let html=
    `
        <div class="modal-content">
            <form action="/createArtical" method="POST" >
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                    <div class="form-group">
                        <label for="articaleName">Artical Name</label>
                        <input type="text" class="form-control" name="articaleName">
                    </div>
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="col-md-8">
                    <div class="card-body">
                        <div class="form-group">
                            <label for="amount ">Amount: </label>
                            <div class="row">
                                <input type="text" class="form-control col-3" name="amount">
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div class="modal-footer d-flex justify-content-between">
                <button type="submit" class="btn btn-success">Create</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>    
            </div>
            </form>
            <div class="card mb-3 m-auto" style="max-width: 540px;">
                <div class="row no-gutters">
              </div>
            </div>
        </div>
    `
    $('#resultId').html(html);
}

function getDetail(productid) {
    // console.log(productid);
    $.ajax({
        type: 'GET',
        url: '/getDetail',
        data: {
            productid
        },
        success: function(data) {
            //  console.log(data);
            let productDetail =
                `<div class="modal-content">
                <form action="/updateArtical" method="POST" >
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                        <div class="form-group">
                            <label for="articaleName">Artical Name</label>
                            <input type="text" class="form-control" name="articaleName" value="${data.articaleName}">
                            <input type="text" name="id" value="${data._id}" hidden>
                        </div>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="col-md-8">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="amount ">Amount: </label>
                                <div class="row">
                                    <input type="text" class="form-control col-3" name="amount" value="${data.amount}"><span style="color: green;" class="col-1"><i class="fas fa-euro-sign"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer d-flex justify-content-between">
                    <p class="card-text"><small class="text-muted"><b>Last updated: ${data.created}</b> </small></p>
                    <div>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="submit" class="btn btn-success">Edite</button>
                    </div>
                </div>
                </form>
                <div class="card mb-3 m-auto" style="max-width: 540px;">
                    <div class="row no-gutters">
                  </div>
                </div>
            </div>
          `;
            $('#resultId2').html(productDetail);
        }
    })
}
