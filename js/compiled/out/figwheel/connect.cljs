(ns figwheel.connect (:require [figwheel.client] [figwheel.client.utils] [mb.ui]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/mb.ui.on-js-reload (apply js/mb.ui.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'mb.ui/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

