import { Application } from "@hotwired/stimulus"
import "@hotwired/turbo-rails"

const application = Application.start()
//= require rails-ujs
// Configure Stimulus development experience
application.debug = false
window.Stimulus   = application

export { application }