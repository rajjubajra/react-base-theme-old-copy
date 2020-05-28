import React from 'react'

function SubscriptionForm() {
  return (
    <form class="w-50">
      <div class="row d-flex flex-row flex-wrap">
        <div class="col input-textbox">
          <input type="text" id="txtemail" class="form-control" placeholder="Email" />
        </div>
        <div class="col">
          <div class="btn-submit">
            <button type="submit" class="btn btn-success float-right">Subscribe</button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default SubscriptionForm
