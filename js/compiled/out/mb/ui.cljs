(ns mb.ui
  (:require [reagent.core :as reagent :refer [atom]]
            [mb.core :as l]))

(enable-console-print!)

(println "Edits to this text should show up in your developer console. asf")

;; define your app data so that it doesn't get over-written on reload

(defonce app-state (atom {:show-skills false}))

(defn app-list []
  [:div.wrapper
    (l/navigation)
    (l/intro-section)
    (l/skills-section app-state)
    (l/portfolio-section)
    (l/contact-section)])

(reagent/render-component [app-list]
                          (. js/document (getElementById "app")))


;#(.addEventListener (.-documentElement js/document) "scroll" l/set-logo-style!)

(defn on-js-reload [])
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  ;; (swap! app-state update-in [:__figwheel_counter] inc)

