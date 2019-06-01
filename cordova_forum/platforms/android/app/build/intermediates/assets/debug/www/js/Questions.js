var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },
    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        var question = document.getElementById('Questions');
        question.setAttribute('class', "nav-item active");
        
        var localStorage = window.localStorage;
        var baseUrl = localStorage.getItem('baseUrl');
        $.get(baseUrl+'/showAllQuestions', callBackFunction);
    },
};

function callBackFunction(responseData, status, xhr)
{   var containerDiv = document.getElementById('container');
    var i = new Array();
    for(i of responseData)
    {   var card = document.createElement('div');
        card.setAttribute("class", "card border-dark mb-3");
            //CARD head
            var cardHead = document.createElement('div');
            cardHead.setAttribute("class", "card-header bg-dark text-white");
                var cardHeadRow = document.createElement('div');
                cardHeadRow.setAttribute("class", "row");
                    var cardHeadCol1 = document.createElement("div");
                    cardHeadCol1.setAttribute("class", "col text-center");
                    cardHeadCol1.textContent = i['votes']+' votes';    
                    cardHeadRow.appendChild(cardHeadCol1);

                    var cardHeadCol2 = document.createElement("div");
                    cardHeadCol2.setAttribute("class", "col text-center");
                    cardHeadCol2.textContent = i['solList'].length+' Solutions';    
                    cardHeadRow.appendChild(cardHeadCol2);
                cardHead.appendChild(cardHeadRow);
            card.appendChild(cardHead);
            //card Body
            var cardBody = document.createElement('div');
            cardBody.setAttribute("class", "card-body text-dark");
                var title = document.createElement('h6');
                title.setAttribute('class', "card-title");
                title.id=i['id'];
                title.name = JSON.stringify(i['solList']);
                title.addEventListener('click', function(){
                    localStorage.setItem("q_id", this.id);
                    localStorage.setItem("sol_ids", this.name);
                    window.location="q_detail.html";
                })
                title.textContent=i['title'];
                cardBody.appendChild(title);

                var tags = document.createElement('button');
                tags.setAttribute("class", "btn btn-secondary btn-sm");
                tags.textContent='tags';
                cardBody.appendChild(tags);
            card.appendChild(cardBody);
            //card foot
            var cardFoot = document.createElement('div');
            cardFoot.setAttribute("class", "card-footer text-white bg-dark");
                var cardFootRow = document.createElement('div');
                cardFootRow.setAttribute("class", "row");
                    var cardFootCol1 = document.createElement("div");
                    cardFootCol1.setAttribute("class", "col text-left");
                    cardFootCol1.textContent = i['user_name'];    
                    cardFootRow.appendChild(cardFootCol1);

                    var cardFootCol2 = document.createElement("div");
                    cardFootCol2.setAttribute("class", "col text-right");
                    cardFootCol2.textContent = i['created_at'].substr(0,10);    
                    cardFootRow.appendChild(cardFootCol2);
                cardFoot.appendChild(cardFootRow);
            card.appendChild(cardFoot);
        containerDiv.appendChild(card);
    }
}
app.initialize();