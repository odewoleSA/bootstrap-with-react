import React from 'react'

function Confirmation() {
  return (
    <>
        <div class="toast show mt-15">
            <div class="toast-header">
            <strong class="me-auto">Your Order is in The Oven!</strong>
            <small>just now</small>
            <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
            </div>
            <div class="toast-body">
            <p>Your delicious pizza will be with you in 30 minutes!</p>
            </div>
        </div>
    </>
  )
}

export default Confirmation;
