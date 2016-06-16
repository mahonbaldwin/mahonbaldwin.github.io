(ns mb.core)

(defn logo []
  [:a {:href "#intro"} [:span.logo [:span {:class "mahon"} "Mahon"] [:span {:class "baldwin"} "Baldwin"]]])

(defn nav-el
  ([name]
   (nav-el name (str "#" name)))
  ([name link & external]
   (let [m {:href link}
         m (if (first external) (assoc m :target "_blank") m)]
     (print m)
     [:a m (str "#" name)])))

(defn navigation []
  [:div.navigation
   (logo)
   (nav-el "skills")
   (nav-el "portfolio")
   (nav-el "contact")
   (nav-el "blog" "http://www.tuesdaydeveloper.com" true)])


(defn title [title]
  [:h3 {:id title} (str "#" title)])

(defn intro-section []
  [:div.intro.section {:id "intro"}
   [:div.intro-text
    [:h2
     "In a world without a leader..."
     [:br]
     "A software engineer who uses his powers for good!"]
    [:p "Hi, I'm Mahon (my secret identity must remain unknown) which is short for Mahonri. I've been a software engineer since I graduated from "
     [:a {:href "http://www.byui.edu/" :target "_blank"} " BYU-Idaho"]
     " in 2010. In addition to
    software development I enjoy reading, hiking, photography, psychology, sociology, slight of hand, rearing my child,
    and finding new ways to surprise my wife."]
    [:p "If you're interested in my skills or portfolio, just scroll down. If you're interested in my work history, you can view it on "
     [:a {:href "https://www.linkedin.com/in/mahonri" :target "_blank"} "LinkedIn"]
     ". If you're wondering where my name comes from, read the "
     [:a {:href "http://mormon.org/beliefs/book-of-mormon" :target "_blank"} "Book of Mormon"]
     ". If you're wondering how bees get their honey into the little plastic bears, I'm sure there is a video on YouTube
     that can tell you."]]])


(defn skill [text img]
  [:div.skill
   [:img {:src (str "img/" img) :alt text :title text}]])

(defn skill-link-item
  ([text] [:li text])
  ([text href]
   (skill-link-item [:a {:href href} text])))

(defn show-hide-list [state]
  (swap! state assoc :show-skills (not (:show-skills @state))))

(def skills-list (sort #(compare (.toLowerCase %1) (.toLowerCase %2))
                   (distinct [".NET"
                              "AngularJS"
                              "Arduino"
                              "Clojure"
                              "ClojureScript"
                              "ColdFusion"
                              "CouchBase"
                              "CSS"
                              "D3"
                              "Datomic"
                              "EmberJS"
                              "Google Cloud"
                              "HTML5"
                              "Java"
                              "JavaScript"
                              "jQuery"
                              "LESS"
                              "MongoDb"
                              "NodeJs"
                              "PHP"
                              "React"
                              "Selenium"
                              "SQL"
                              "SASS"
                              "XML"])))

(defn skills-section [state]
  [:div.skills.section
   (title "skills")
   [:div.items
    (skill "Clojure" "clj.png")
    (skill "ClojureScript" "cljs.png")
    (skill "React" "react.png")
    (skill "NodeJS" "node.png")
    (skill "jQuery" "jquery.png")
    (skill "HTML5" "html5.png")
    (skill ".NET" "dotnet.png")
    (skill "Java" "java.png")]
   [:div.full-list (when (not (:show-skills @state)) [:button {:on-click #(show-hide-list state)} "view larger list"])
    [:div {:class (or (:show-skills @state) "hidden")}
     [:ul.skill-list
      (for [s skills-list]
        (skill-link-item s))]]]])

(defn portfolio-item [content description]
  [:div.portfolio-item content description])

(defn portfolio-item-link [text img link & description]
  (portfolio-item [:a {:href link :target "_blank"} (if img [:img {:src (str "img/" img)}] text)] description))

(defn portfolio-youtube [src description]
  (portfolio-item [:iframe {:width 560 :height 315 :src src :frameborder 0 :allowfullscreen true}] description))


(defn portfolio-section []
  [:div.portfolio.section
   (title "portfolio")
   [:div.items
    (portfolio-item-link "beingCindy.com" "being-cindy.png" "http://beingcindy.com" "Cindy Baldwin is a talented children's book writer and poet who needs a place to tell agents and publishers about her and her work, " [:a {:href "http://beingcindy.com"} "beingcindy.com"] " is her place to do that. She is also my awesome wife. I developed her site after she drew up some mock-ups of what she wanted.")
    (portfolio-youtube "https://www.youtube.com/embed/ugp_lkuYVis" "I enjoy playing around with electronics. This is an Arduino hooked up to the motors of an old remote controlled car. One day I plan to get a WiFi board and add remote functionality.")
    ;(portfolio-item-link "tuesdayDeveloper;" nil "http://www.tuesdaydeveloper.com" "An ongoing project of mine is my blog, tuesdayDeveloper;. While the time I devote to my blog is not constant, I try to make sure I post regularly (broadly speaking). I write my opinions and tutorials about technology.")
    (portfolio-item-link "github.com" "github.png" "http://github.com/mahonbaldwin" "I have several small projects on GitHub, most of them are simple proofs of concept.")]])



(defn contact-section []
  [:div.contact.section
   (title "contact")
   [:div.content "Feel free to drop me a line, but if you really want to be considerate, please pick it up again. The best ways to get a hold of me are using one of the following social networks."]
   [:div.content
    [:div [:a {:href "https://twitter.com/mahonrib"} "Twitter"]]
    [:div [:a {:href "https://www.linkedin.com/in/mahonri"} "LinkedIn"]]]])
