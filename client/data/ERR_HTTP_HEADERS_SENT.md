# Multiple http headers sent error
In going through a MERN stack tutorial from Lama Dev, I ran into this error about half way through. The full error is:

*'Error \[ERR_HTTP_HEADERS_SENT\]: Cannot set headers after they are sent to the client'*

Lama is working on the code for logging in a user. You need to check if there is a user. There are any number of ways to do this. Lama has chosen to make the username unique in the model and is searching for it. He also is comparing the password with the saved hashed password. If either of those fail, then send a 400 status and error message. If you find both then send the user back with a 200 status.

The issue I had with his code was that if one of the checks failed, another header would be sent, creating this error and trashing the server. Here is the code wrote:

```
router.post('/login', async (req, res) => {

  try {
    const user = await User.findOne({username: req.body.username});
    !user && res.status(400).json('Wrong Credentials');

    const validated = await bcrypt.compare(req.body.password, user.password);
    !validated && res.status(400).json('Wrong Credentials');

    res.status(200).json(user);

  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
})
```

There are a few ways to handle this error. You need to evaluate each step one at a time and only send one response. To be clear, i believe the above code should do that. Because of the && I believe the code should check the user, if false then it should send status 400 along with the message and be done with everything else in the try block.

For me, that did not work, so I could ensure to return every *response.status* being made. Placing the *return* statement in front of every *res.status* would make sure that that code block was evaluated and move on. Or I could wrap each code block in an if else statement. Given es-6, there are a few options there you can use.

Reading through the comments I found another who must have had a similar issue. The code they suggested is below:

```
router.post('/login' , async (req,res) =>{
    try {
        const user = await User.findOne({username: req.body.username});
//The code changes here for the if statement .. mine didn't work with the code shown in the video

        if(!user)
        {
            return res.status(400).json("wrong credentials")
        }

        const validated = await bcrypt.compare(req.body.password, user.password);
        if(!validated)
        {
            return res.status(400).json("wrong credentials");
        }

        res.status(200).json(user);

    } catch(err){
        res.status(500).json(err);
    }
});
```

The above code you can see this person choose the if statement path. They search for the user and if they find it, they validate the password and proceed. This seems straight forward and inline with what was written by Lama. This was not the take I took, but I believe it would work.

Here is what I ended up doing:

```
router.post('/login', async (req, res) => {
  const {username, password} = req.body
  const user = await User.findOne({username})

  try {
    if(user && (await bcrypt.compare(req.body.password, user.password))){
      res.status(200).json(user);
    } else {
      res.status(400).json('Check Credentials');
    }

  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
})
```

I pulled the username and password out of the req.body for easy use. I use a if statement to first check if a user is found, if I have a user then I check that password. If both are good then set that 200 and send the user. If either are no good, set that 400 and send the help message. If fail, let the catch handle it.

Now you need to deal with the fact you are sending that password back. Really don't need that returned. If you are not sure how to deal with that, I will say that the spread operator is awesome. If that really didn't help, then check out this video [Lama Dev](https://youtu.be/OML9f6LXUUs?t=2028). Lama indicates that he may have to separate out the password from *user.doc'*. With the object returned from *user* I found the information returned is *_doc*, **not** *doc*.

I hope this helps if you are dealing with this particular issue.
Article on [LinkedIn](https://www.linkedin.com/pulse/multiple-http-headers-sent-error-mason-roberts)