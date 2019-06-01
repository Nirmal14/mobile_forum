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
        var localStorage = window.localStorage;
        var q_id = localStorage.getItem('q_id');
        var sol_ids = JSON.parse(localStorage.getItem('sol_ids'));        
         
        post_data = {
            question_id : q_id,
            solution_ids : sol_ids 
        }
        post_data = JSON.stringify(post_data);
        var baseUrl = localStorage.getItem('baseUrl');
        console.log("post data: "+post_data); 
        $.ajax(
            {
                url:baseUrl+'/q_details',
                type:'POST',
                data:post_data,
                success:ajaxCallBack,
                contentType:"application/json",
            }
        );
    },
};

function ajaxCallBack(responseData, status, xhr)
{
    console.log(responseData);
    console.log(status);
    console.log(xhr);
    var question=responseData[0];
    var solutions=responseData[1];

    var q_title=document.getElementById('question_title');
    var q_body=document.getElementById('question_body');
    var votes=document.getElementById('votes');
    var asked_date=document.getElementById('date');
    var username=document.getElementById('username');
    var no_of_sols=document.getElementById('no_of_solutions');

    q_title.textContent=question['title'];
    q_body.textContent=question['body'];
    votes.textContent=question['votes'];
    asked_date.textContent="asked - "+question['created_at'].substr(0,10)+" -";
    username.textContent=question['user_name'];
    no_of_sols.textContent=solutions.length+" Solutions";  

    for(i of solutions)
    {
        var ul = document.getElementById('main');

        var  sol_list =  document.createElement('li');
        sol_list.setAttribute('class',"list-group-item");
            var content_div = document.createElement('div');
            content_div.setAttribute('class',"row");
            content_div.textContent=i['explain'];
            sol_list.appendChild(content_div);
            
            var details_div = document.createElement('div');
            details_div.setAttribute('class',"row");
            details_div.setAttribute('style',"margin-top: 10px");
                var votes = document.createElement('div');
                votes.setAttribute('class',"col");
                    var up_vote=document.createElement('button');
                    up_vote.setAttribute('class',"btn btn-light badge");
                    up_vote.textContent="up";
                    votes.appendChild(up_vote);

                    var count_vote=document.createElement('span');
                    count_vote.setAttribute('class',"badge");
                    count_vote.textContent=i['votes'];
                    votes.appendChild(count_vote);

                    var down_vote=document.createElement('button');
                    down_vote.setAttribute('class',"btn btn-light badge");
                    down_vote.textContent="down";
                    votes.appendChild(down_vote);
                details_div.appendChild(votes);

                var com_ans = document.createElement('div');
                com_ans.setAttribute('class',"col text-center");
                    var com=document.createElement('button');
                    com.setAttribute('class',"btn btn-light badge");
                    com.textContent="Comment";
                    com_ans.appendChild(com);
                details_div.appendChild(com_ans); 
            sol_list.appendChild(details_div);

            var about_div=document.createElement('div');
            about_div.setAttribute('class',"text-center");
                var date = document.createElement('span');
                date.textContent="Answered - "+i['created_at'].substr(0,10)+" -";
                about_div.appendChild(date);

                var user=document.createElement('a');
                user.href="#";
                user.textContent=i['user_name'];
                about_div.appendChild(user);
            sol_list.appendChild(about_div);

        ul.appendChild(sol_list);
    } 
}

app.initialize();