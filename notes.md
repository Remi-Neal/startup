TODO
1. 
2. 
3. 
4. 
5. 
6. Scope
7. Modules
8. DOM
9. Local Storage
10. Promises, Async, Await
11. Debugging
12. Node.js
13. Debugging Node.js
14. 
# Notes for CS 260
## Table of Contents (Not Done)
#### Fundimentals
1) [Console Commands](#console-commands-to-know)
2) [Git & Github](#git-and-github)
3) [Tech Stack](#tech-stack)
4) [AWS](#aws)
5) [Caddy](#caddy)
6) [Web Certs](#web-certificates)
7) [Editors](#editors)
#### Programming
8) [HTML](#html)
9) [CSS](#css)
10) [JavaScript](#javascript)
### __Midterm__
12) [Web Frameworks](#web-frameworks)
13) [React](#react)
14) [Toolchains](#toolchains)
15) [Vite](#vite)
#### Web Connection
17) [HTTP Service](#http-service)
18) [Web Service](#web-service)
19) [Express](#express) 
20) [SOP and CORS](#sop-and-cors)
#### Data and Authentication
21) 
## Console Commands to know
- All these Commands are POSIX compliant

|              Command              |                                       Description                                       |
| :-------------------------------: | :-------------------------------------------------------------------------------------: |
|                ls                 |                        Lists all files in the current directory                         |
|              ls -la               |                   List all files the extra info and list hidden files                   |
|                pwd                |                              Prints the current directory                               |
|                cd                 |                                    Changes directory                                    |
|               cd ..               |                                  Go back one directory                                  |
|       cd My/Next/Directory        |                   Path to next directory from your current directory                    |
|               mkdir               |                                   Make new directory                                    |
|               rmdir               |                           Remove directory (**permanently**)                            |
|                rm                 |                             Remove files (**permanently**)                              |
| mv current.file new/file/location |                                       Move files                                        |
|                cp                 |                   Copy file (nice for making backups of Caddy files)                    |
|               curl                |                      Command line URL Browser (returns html file)                       |
|               grep                |                         Searches text using regular expressions                         |
|               find                |                                   Finds file location                                   |
|                top                |                 'Table of Processes' lists currently running processes                  |
|                ps                 |                            View currently running processes                             |
|                cat                |                     Outputs contents of a file to the command line                      |
|          less or vi(vim)          |   Interactively see and edits contents of a file (Like Word with keyboard shortcuts)    |
|                wc                 |                                       Word count                                        |
|               kill                |                            Kill currently running processes                             |
|               sudo                |               Act as the 'Super User' or admin **Very Danger Be Careful**               |
|                ssh                |                    Create a secure shell to a remote computer/server                    |
|               exit                |                                 Exit your ssh instance                                  |
|                scp                |                        Securely copy files to a remote computer                         |
|              history              |                                Show the command history                                 |
|               ping                |                             Check to see if a website is up                             |
|              tracert              |                              Trace connection to a website                              |
|                dig                |                              Show to DNS info for a domain                              |
|                man                |                        'Manual' looks up a command in the manual                        |
|                \|                 | 'Pipe' takes output of left command and passes it to the right command (can be chained) |
|                 >                 |                 Redirect the output of a file (will ovewrite the file)                  |
|                >>                 |             Redirects the output of a file (appends to the end of the file)             |

- Useful keystrokes

| Keystroke |                          Description                          |
| :-------: | :-----------------------------------------------------------: |
|  CTRL-R   |            Use type ahead to find previous command            |
|  CTRL-C   | Kill currently running command **SUPER USEFUL AND IMPORTANT** |
|    TAB    |   Can be used to autocomplete file/directory you are typing   |

- Vim (Useful but has a slight learning curve)

| Keystroke |                   Description                    |
| :-------: | :----------------------------------------------: |
|    :h     |                       Help                       |
|     i     |                 Insert into text                 |
|     u     |                       undo                       |
|  CTRL-r   |                       redo                       |
|    ESC    |         Exit current mode (like insert)          |
|    :e     |             Open a file or directory             |
|    :q     |                    Quits vim                     |
|    :q!    |               Quit without saving                |
|    :w     |        'Writes' or saves changes to file         |
|    :wq    |               Saves and quits vim                |
|    gg     |            Go to the top of the file             |
|     G     |            Go to the end of the file             |
|     /     | Search for the text you type following the slash |
|     n     |                Next search match                 |
|     N     |              Previous search match               |
|     v     |               Visually select text               |
|     y     |         'Yank' or copy text to clipboard         |
|     p     |               Paste from clipboard               |
|  CTRL-wv  |              Split window verically              |
|  CTRL-ww  |                  Toggle windows                  |
|  CTRL-wq  |               Close current window               |
## Git and GitHub
- it is easiest to create a repo on GitHub then clone it than push a new repo to GitHub
- clone from GitHub 
   - `git clone https://github.com/url-to-repo-on-github`
- add files to git
    - `git add file.name`
	    - using `git add *` adds all not tract files in your repo
- commit, add, and add message to git
    - `git commit -am "my comments here with proper etiquette"`
- send edits to GitHub
    - `git push`
- check for changes on GitHub
    - `git fetch`
    - `git status`
- when merging, you must review the conflict before finishing the merge

### GitHub forks and pull request
- you can create a fork to a GitHub repo to edit the files independent of the main branch
    - this is how the open source community developes software
- when you fork a repo and want to add your fork back to the main branch, you can make a pull request
    - this notifies the repo owner that you want to make a change
    - they will either approve it or deny it

## Tech Stack
- The tech stack is the services, applications, and all tools used to create a fully functioning website
- Our stack
    - _React_ - Web Framework
    - _Caddy_ - Certificates
    - _AWS_ - Server host
    - _NodeJS_ - Backend
    - _MongoDB_ - Data Base
        - Hosted on MongoDB Atlas
- There is no one right tech stack, just different advantages and disadvantages
    - Dependability, support, scalability, performance, and security are all important factors

## AWS 
### EC2
- Creating an instance
    - Log into AWS and select EC2 and launch instance
    - Name instance and select instance type
        - You can also select an 'Amazon Machine Image' to create a web server with a preinstalled tech stack
    - Make a key pair
        - This is used to ssh into your server so never share it to any public location like GitHub
    - You have to create a security group exposing the ports you want your project to use
        - Typical
            - SSH, HTTP, HTTPS with traffic coming from anywhere
    - Once all this is set up, you should be able to find your public IP address, type it into your browser, and see your website
    - To keep your public IP consistent you will need to set up an elastic IP
        - You can do this by navigating to the elastic IP menu
        - Select 'Allocate Elastic IP Address'
        - Then 'Allocate'
        - 'Actions'
        - 'Associate Elastic IP address'
        - 'Instance'
        - 'Associate'
- SSH into your server
    - Common commands
        - `ssh -i [key pair file] ubuntu@[ip address]`
            - the key pair file will be the file you created when you set up your instance
            - IP address is your public IP address
        - `chmod  600 [key pair file]`
            - AWS sometimes doesn't like how public your key pair file is
            - This command changes your file's accessibility
                - `600` mean the file owner can read and write to this file, 6, but others in your group or other users in general cannot
                - Don't worry too much about this ^^^
        
### Route 53
- You can purchase a domain name to register with a DNS server and apply it to an IP address
- To register a domain
	- Navigate to Route 53
	- `Domains > Registered Domain`
	- Select `Register Domain`
	- Check to see if your desired domain is available
		- different `.whatevers` cost different amounts
	- `Add to cart` and checkout
	- It can take up to 48 hours for your domain to be registered but typically take less time
	- After you have completed registration, you can use `whois` in the console to see all this information
		- `whois` might need to be installed using `sudo apt install whois`
		- You don't need this but it can be fun. Might have to mess with the Ubuntu kernel though so if you are not comfortable with that, **Don't do it**
- Create a hosted zone
	- Navigate to Route 53
	- Select `Hosted Zone`
	- Find your domain name
		- If it doesn't appear then you can go to `Domains > Pending Request`
		- Your domain should already have DNS records of types `NS` and `SOA`
	- Go to `Create Record` and enter your IP address (make sure you have an elastic IP address or your domain name and current IP can disconnect)
	-  Press `Create Records` and create a new `A` record with your domain name
		- This domain will go to your root domain and connect directly to your IP
		- You can also create a `*.your.domain` style domain to go to any subdomain you will create
- Record types
	- `A` records show the IP address your domain will direct to
	- `NS` is the name server record that list the names of the authoritative DNS servers that verify you can place this record in a given DNS server
	- `SOA` is the 'start of authority' or the contact information for the domain owner

## Caddy
- Caddy is the software/service we use to handle and rotate web certificates
	- Serves all static: HTML, CSS, and JavaScript
	- Acts as a gate to all subdomains
- **If you start messing with your Caddy file, make a backup in case you screw up and can't fix it**
	- use `cp Caddyfile backup_Caddyfile` to create a backup file
### Important Caddy files
- Configuration file: `~/Caddyfile`
	- Routes HTTP requests
	- Determines location of static HTPS files
	- Handles proxy requests other services
- HTML file: `~/public_html`
	- Directory of files that Caddy will serve
	- Looks like this where the `root` shows the path to the directory that Caddy will look for when you use the `/file.name` at the end of your URL
		- i.e. `file.name` is in the public html directory and is served when you type in `https://mywebsite.com/file.name`
```
:80 {
	root * path/to/html/directory
	file_server
}
```



## Web Certificates 
### HTTP & HTTPS
- HTTP is an old, non-secure, way of connecting to websites
	- HyperText Transfer Protocol
	- Not secure because security use to be too much of a hassle and not typically needed
	- Part of 'Web 1.0' which mainly served static sites that didn't have a backend
	- Anyone could track network traffic and see what data you were sending
- HTTPS is much like HTTP but with the added security
	- HTTP Secure
	- Critical to the development of 'Web 2.0' which is what we're in right now
		- Dynamic web applications
	- Encrypted with TLS protocol
### TLS
- The successor to, and sometimes still referred to as, SSL
- Works by negotiating a shared secret between two computers
	- This is used to encrypt the data
- You can see this happen if you use `curl -v` in a console
	- The `-v` flag means 'verbose' and gives you more information
- The 'handshake' is the exchange of web certificates that identifies the domain name of the server
	- This creates the secure connection
	- The browser checks that the domain name on the certificate matches the domain name in the browser's search bar
		- If they are the same then it is accepted
### Web Certificates
- Web certificates are created by a trusted 3<sup>rd</sup> party using public/private key encryption
- It use to cost hundreds of dollars a year to get a web certificate
	- In 2014, a non-profit called <ins>Let's Encrypt</ins> created trusted web certificates for free
	- This was important to democratize the web
	- <ins>Let's Encrypt</ins> also pioneered the 'ACME protocol', an IETF standard
- Every time an HTTPS request to a domain name Caddy doesn't have a certificate for, Caddy will work with Let's Encrypt to create a new web certificate
- Unless specified, if your domain is typed into a Caddy enabled server, Caddy will automatically port it to HTTPS, port 443
- You can obtain and renew a web certificate by enabling the ACME protocol for your web server and communicating with Let's Encrypt
	- Many modern programing languages, like Rust, Node.js, or Go, support this by including an additional library

## Editors
- For web programing, you will need a code editor
- Deeply learning a good editor makes you efficient, flexible, and reduces frustration
- The ones we use for this course are
	- Visual Studio Code (a desktop application)
	- VI/Vim (a console application)
	- less (another console application)
		- More of a light weight file viewer
	- pico (a console application)
		- use `nano file.name` to use pice/nano
		- Not used in this course but might be an easier beginner app
### Visual Studio Code
- Created by Microsoft and is supported by a large community of source developers
	- Also it's free so can't beat that
- One of the top IDEs on the market and is used by at least 71% of devs
- Default Features
	- File view
	- Git support
	- Auto-formating
	- Auto-suggestions
	- JavaScript debugging
- It is easy to find and install extensions to customize what services you want/need
- Some great extensions to have for web development
	- <ins>Live Server</ins> - This is a great way to create a development server on your computer and test out your code before you push it to your server
	- <ins>GitLens</ins> - This allows you to get the most out of git by making the basic functions of git easier to execute
### Vim/VI
- Vim is a console based text editor and is one of the oldest out there
- Vim is installed on every Linux server so it is a skill that is extremely useful
- Because of its...tenure...there are an abundance of tutorials out there for whatever your preferred learning style
	- In the console, you can even type `vimtutor` to learn
### Less
- Is not a text editor but a text viewer
- It offers many great features for exploring files
	- Especially large files

## HTML
### Structure
- HTML provides structures to websites
- Common HTML structural elements: `body`, `header`, `footer`, `main`, `section`, `aside`, `p`, `table`, `ol/ul`, `div`, and `span`
- The top level element is the `body`
	- x
- `body` has 3 children or subelements 
	- `header`, `main`, and `footer`
- The `header` contains
	- `p` - paragraphs
	- `span` 
	- `nav` - navigation containing `div`
	- `div` - divisions of sub-content
- The `footer` has a content division with a single span
- Example
```
<body>
  <p>Body</p>
  <header>
    <p>Header - <span>Span</span></p>
    <nav>
      Navigation
      <div>Div</div>
      <div>Div</div>
    </nav>
  </header>

  <main>
    <section>
      <p>Section</p>
      <ul>
        <li>List</li>
        <li>List</li>
        <li>List</li>
      </ul>
    </section>
    <section>
      <p>Section</p>
      <table>
        <tr>
          <th>Table</th>
          <th>Table</th>
          <th>Table</th>
        </tr>
        <tr>
          <td>table</td>
          <td>table</td>
          <td>table</td>
        </tr>
      </table>
    </section>
    <aside>
      <p>Aside</p>
    </aside>
  </main>

  <footer>
    <div>Footer - <span>Span</span></div>
  </footer>
</body>
```
- There are two different flavors of structure elements: block and inline
	- Block elements signify distinct blocks in the content structure
	- Inline elements are meant to be in the content flow of a block element
	- ex
```
<div>He said <b>don't</b> cross the beams.</div>

<p>Authors such as <span>ee cummings</span> often used unconventional structure.</p>
```
### Input
- Early HTML had these types to take user input

|Element|Meaning|Example|
|---|---|---|
|`form`|Input container and submission|`<form action="form.html" method="post">`|
|`fieldset`|Labeled input grouping|`<fieldset> ... </fieldset>`|
|`input`|Multiple types of user input|`<input type="" />`|
|`select`|Selection dropdown|`<select><option>1</option></select>`|
|`optgroup`|Grouped selection dropdown|`<optgroup><option>1</option></optgroup>`|
|`option`|Selection option|`<option selected>option2</option>`|
|`textarea`|Multiline text input|`<textarea></textarea>`|
|`label`|Individual input label|`<label for="range">Range: </label>`|
|`output`|Output of input|`<output for="range">0</output>`|
|`meter`|Display value with a known range|`<meter min="0" max="100" value="50"></meter>`|
- Form elements
	- Main purpose is to take user inputs
- Input types
	- `<input type="one of these" />`

| Type           | Meaning                           |
| -------------- | --------------------------------- |
| text           | Single line textual value         |
| password       | Obscured password                 |
| email          | Email address                     |
| tel            | Telephone number                  |
| url            | URL address                       |
| number         | Numerical value                   |
| checkbox       | Inclusive selection               |
| radio          | Exclusive selection               |
| range          | Range limited number              |
| date           | Year, month, day                  |
| datetime-local | Date and time                     |
| month          | Year, month                       |
| week           | Week of year                      |
| color          | Color                             |
| file           | Local file                        |
| submit         | button to trigger form submission |
- Input Attributes
	- `<input name="" value="" required checked />`

|Attribute|Meaning|
|---|---|
|name|The name of the input. This is submitted as the name of the input if used in a form|
|disabled|Disables the ability for the user to interact with the input|
|value|The initial value of the input|
|required|Signifies that a value is required in order to be valid|
- Validating input
	- Many elements require valid inputs natively before a user can submit
	- The required attribute is one of these validating options
	- The pattern attribute exists default on
		- text
		- search
		- url
		- tel
		- email
		- password
	- **YOU SHOULD ALSO HAVE VALIDATION IN YOUR JAVASCRIPT THAT VALIDATES EVERYTHING BEFORE THEY CAN SUBMIT** 
	- There are CSS selectors that can visualize a valid input
		- This is part of good UX design. Giving good feedback to a user makes the user feel better
### Media
- 
## CSS
### Basics
- Css was created to add pretty layouts to raw HTML 
	- based on the desires of: users, developers, and browsers
- Css now can
	- animate webpages
	- upload custom fonts
	- respond to user action
	- dynamically alter entire webpages
- There are different ways to associate Css with HTML
- I.E.
```HTML
<p styzle="color:green">CSS</p>
```
 or
```HTML
<style>
    p {
      color: green;
    }
  </style>
```
or
```HTML
<link rel="stylesheet" href="styles.css" />
```
plus
```CSS
p {
  color: green;
}
```
### Selectors
- HTML Selection
	- You can select any html element by element name
	- Doing this allows the style to cascade to all sub elements
	- You can also select everything on the page by using the start (\*) selector
- Combinators
	- CSS allows you to add specificity to which elements you select based on their relation to other elements

| Combinator       | Meaning                    | Example        | Description                                |
| ---------------- | -------------------------- | -------------- | ------------------------------------------ |
| Descendant       | A list of descendants      | `body section` | Any section that is a descendant of a body |
| Child            | A list of direct children  | `section > p`  | Any p that is a direct child of a section  |
| General sibling  | A list of siblings         | `div ~ p`      | Any p that has a div sibling               |
| Adjacent sibling | A list of adjacent sibling | `div + p`      | Any p that has an adjacent div sibling     |
- Class Selection
	- CSS allows you to select all elements of a specific class
	- You select these elements by placing a period in from of you class name `.class-name`
	- You can select html elements with a specific class using this formula `p.class-name`
- ID Selection
	- CSS allows you to select elements based on ID as well using a '#' `#id-name`
- Attribute Selection
	- CSS also allows you to select elements based any attributes 
	- ex
		- `a[href='google.com'`
		- `p[class='summary'`
	- Full list of attribute selection from [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors) 
```CSS
/* <a> elements with a title attribute */
a[title] {
  color: purple;
}

/* <a> elements with an href matching "https://example.org" */
a[href="https://example.org"]
{
  color: green;
}

/* <a> elements with an href containing "example" */
a[href*="example"] {
  font-size: 2em;
}

/* <a> elements with an href ending ".org", case-insensitive */
a[href$=".org" i] {
  font-style: italic;
}

/* <a> elements whose class attribute contains the word "logo" */
a[class~="logo"] {
  padding: 2px;
}
```
- Pseudo Selectors
	- Pseudo selectors allow for dynamic changes to css by updating based on various states
		- a nice one is `p:hover` that changes based on if the mouse is hovering over an element
	- Here is a long list of pseudo selectors from [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes) 

| Pseudo Selector                                                                               | Description |
| --------------------------------------------------------------------------------------------- | ----------- |
| A                                                                                             |             |
| [`:active`](https://developer.mozilla.org/en-US/docs/Web/CSS/:active)                         |             |
| [`:autofill`](https://developer.mozilla.org/en-US/docs/Web/CSS/:autofill)                     |             |
| [`:any-link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link)                     |             |
| B                                                                                             |             |
| [`:blank`](https://developer.mozilla.org/en-US/docs/Web/CSS/:blank)                           |             |
| C                                                                                             |             |
| [`:checked`](https://developer.mozilla.org/en-US/docs/Web/CSS/:checked)                       |             |
| [`:current`](https://developer.mozilla.org/en-US/docs/Web/CSS/:current)                       |             |
| D                                                                                             |             |
| [`:default`](https://developer.mozilla.org/en-US/docs/Web/CSS/:default)                       |             |
| [`:defined`](https://developer.mozilla.org/en-US/docs/Web/CSS/:defined)                       |             |
| [`:dir()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:dir)                             |             |
| [`:disabled`](https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled)                     |             |
| E                                                                                             |             |
| [`:empty`](https://developer.mozilla.org/en-US/docs/Web/CSS/:empty)                           |             |
| [`:enabled`](https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled)                       |             |
| F                                                                                             |             |
| [`:first`](https://developer.mozilla.org/en-US/docs/Web/CSS/:first)                           |             |
| [`:first-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child)               |             |
| [`:first-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type)           |             |
| [`:focus`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus)                           |             |
| [`:focus-visible`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)           |             |
| [`:focus-within`](https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within)             |             |
| [`:fullscreen`](https://developer.mozilla.org/en-US/docs/Web/CSS/:fullscreen)                 |             |
| [`:future`](https://developer.mozilla.org/en-US/docs/Web/CSS/:future)                         |             |
| G                                                                                             |             |
| H                                                                                             |             |
| [`:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has)                             |             |
| [`:host`](https://developer.mozilla.org/en-US/docs/Web/CSS/:host)                             |             |
| [`:host-context()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:host-context)           |             |
| [`:hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/:hover)                           |             |
| I                                                                                             |             |
| [`:indeterminate`](https://developer.mozilla.org/en-US/docs/Web/CSS/:indeterminate)           |             |
| [`:in-range`](https://developer.mozilla.org/en-US/docs/Web/CSS/:in-range)                     |             |
| [`:invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid)                       |             |
| [`:is()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:is)                               |             |
| J                                                                                             |             |
| K                                                                                             |             |
| L                                                                                             |             |
| [`:lang()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:lang)                           |             |
| [`:last-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child)                 |             |
| [`:last-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-of-type)             |             |
| [`:left`](https://developer.mozilla.org/en-US/docs/Web/CSS/:left)                             |             |
| [`:link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:link)                             |             |
| [`:local-link`](https://developer.mozilla.org/en-US/docs/Web/CSS/:local-link)                 |             |
| M                                                                                             |             |
| [`:modal`](https://developer.mozilla.org/en-US/docs/Web/CSS/:modal)                           |             |
| N                                                                                             |             |
| [`:not()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:not)                             |             |
| [`:nth-child()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child)                 |             |
| [`:nth-last-child()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child)       |             |
| [`:nth-last-of-type()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type)   |             |
| [`:nth-of-type()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type)             |             |
| O                                                                                             |             |
| [`:only-child`](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-child)                 |             |
| [`:only-of-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/:only-of-type)             |             |
| [`:optional`](https://developer.mozilla.org/en-US/docs/Web/CSS/:optional)                     |             |
| [`:out-of-range`](https://developer.mozilla.org/en-US/docs/Web/CSS/:out-of-range)             |             |
| P                                                                                             |             |
| [`:past`](https://developer.mozilla.org/en-US/docs/Web/CSS/:past)                             |             |
| [`:paused`](https://developer.mozilla.org/en-US/docs/Web/CSS/:paused)                         |             |
| [`:picture-in-picture`](https://developer.mozilla.org/en-US/docs/Web/CSS/:picture-in-picture) |             |
| [`:placeholder-shown`](https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown)   |             |
| [`:playing`](https://developer.mozilla.org/en-US/docs/Web/CSS/:playing)                       |             |
| [`:popover-open`](https://developer.mozilla.org/en-US/docs/Web/CSS/:popover-open)             |             |
| Q                                                                                             |             |
| R                                                                                             |             |
| [`:read-only`](https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only)                   |             |
| [`:read-write`](https://developer.mozilla.org/en-US/docs/Web/CSS/:read-write)                 |             |
| [`:required`](https://developer.mozilla.org/en-US/docs/Web/CSS/:required)                     |             |
| [`:right`](https://developer.mozilla.org/en-US/docs/Web/CSS/:right)                           |             |
| [`:root`](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)                             |             |
| S                                                                                             |             |
| [`:scope`](https://developer.mozilla.org/en-US/docs/Web/CSS/:scope)                           |             |
| [`:state()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:state)                         |             |
| T                                                                                             |             |
| [`:target`](https://developer.mozilla.org/en-US/docs/Web/CSS/:target)                         |             |
| [`:target-within`](https://developer.mozilla.org/en-US/docs/Web/CSS/:target-within)           |             |
| U                                                                                             |             |
| [`:user-invalid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:user-invalid)             |             |
| V                                                                                             |             |
| [`:valid`](https://developer.mozilla.org/en-US/docs/Web/CSS/:valid)                           |             |
| [`:visited`](https://developer.mozilla.org/en-US/docs/Web/CSS/:visited)                       |             |
| W                                                                                             |             |
| [`:where()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:where)                         |             |

### Fonts
- Fonts are important to all websites
- Font Families
	- CSS uses `font-families` to define what fonts a website should use
		- popular ones are `serif`, `sans-serif`, `fixed`, and `symbol`
			- serif fonts have a little make on the ends of letters
			- fixed fonts have characters that are all the same width
			- symbol are non-language characters like wingdings
- Importing Fonts (1 of 2)
	- Fonts can be imported to CSS using the `@font-face` rule
	- You provide the font name and the url to the font
```CSS
@font-face {
  font-family: 'Quicksand';
  src: url('https://cs260.click/fonts/quicksand.ttf');
}

p {
  font-family: Quicksand;
}
```
- Importing Fonts (2 of 2)
	- fonts can also be imported directly from a service like google which provides open source fonts
```CSS
@import url('https://fonts.googleapis.com/css2?family=Rubik Microbe&display=swap');

p {
  font-family: 'Rubik Microbe';
}
```
### Colors
- CSS allows you to use different color definitions to color your website
- When using colors be aware of potential accessibility issues like color blindness
- You can also make [gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient) of colors
- Here is a list of definitions

| Type              | Explanation                                                                                                                                                                                                                                                                                                                                                                        | Notation                                                           |
| ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| keywords          | Predefined colors that you can add with simple words                                                                                                                                                                                                                                                                                                                               |                                                                    |
| rgb()/hexadecimal | This system allows you to define colors based on red, green, and blue values. You can additionally add an alpha value to change it's transparency                                                                                                                                                                                                                                  | \#rrggbbaa<br>\#rrggbb<br>\#rgb                                    |
| hsl()/hwb()/hue   | This system defines colors based on hue, saturation, and lightness or hue, whiteness, and blackness with an optional alpha value for transparency. This is a less intuitive system for some people unless you're use to Photoshop. This system is based on percentages and angles on a color wheel.                                                                                | hsl(\<angle> 100% 100% / 50%) <br><br>hwb(\<angle> 100% 50% / 60%) |
| lab/oklab         | The lab() function gives colors in the CIE L*a*b* color space. oklab() function gives colors in the OKLab color space. They specify the: 'l', lightness; 'a', red/green axis; and 'b', blue/yellow axis. This also has an optional alpha value for transparency. These are defined by +/- percentages or decimals except the 'l' value ranges from 0%/0, black, and 100%/1, white. | lab(50% 40% -20%) <br>oklab(0.5 -0.2 0.8 )                         |
| relative colors   | CSS allows you to define relative colors. There is a [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_colors/Relative_colors) page dedicated to it to read up on it                                                                                                                                                                                                      |                                                                    |
| transparent       | Makes things completely transparent                                                                                                                                                                                                                                                                                                                                                |                                                                    |
- Here is a list of keywords for colors in CSS 

*\*note*: The colors won't render with the markdown parser on GitHub. I am using Obsidian which supports it and it appears that VSCode's markdown preview does as well.

| Keyword             | Color                                                               |
| ------------------- | ------------------------------------------------------------------- |
| black               | <code style="color: black">@@@@</code>                              |
| silver              | <code style="color: silver">@@@@</code>                             |
| gray                | <code style="color: gray">@@@@</code>                               |
| white               | <code style="color: white">@@@@</code>                              |
| maroon              | <code style="color: maroon">@@@@</code>                             |
| red                 | <code style="color: red">@@@@</code>                                |
| purple              | <code style="color: purple">@@@@</code>                             |
| fuchsia             | <code style="color: fuchsia">@@@@</code>                            |
| green               | <code style="color: green">@@@@</code>                              |
| lime                | <code style="color: lime">@@@@</code>                               |
| olive               | <code style="color: olive">@@@@</code>                              |
| yellow              | <code style="color: yellow">@@@@</code>                             |
| navy                | <code style="color: navy">@@@@</code>                               |
| blue                | <code style="color: blue">@@@@</code>                               |
| teal                | <code style="color: teal">@@@@</code>                               |
| aqua                | <code style="color: aqua">@@@@</code>                               |
| about 150<br>more @ | [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color) |
- Not important to this course but you should also know about [rebeccapurple](https://medium.com/@valgaze/the-hidden-purple-memorial-in-your-web-browser-7d84813bb416) <code style="color: rebeccapurple"> @@@@ </code>
### Grid
- The grid layout is useful for creating a responsive [grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout)
- Declared using `display: grid;` and cascades to the children of the element
- `grid-template-column` property specifies the column layout
- `grid-template-rows` property specifies the row size
- `grid-gap` property defines the gap between elements
- You can make dynamically resized elements by using the function `repeat()` to constantly update
	- You can then define the `auto-fill` to automatically fill the space
- `fr` refers to a fractional unit
- ex
```CSS
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 1em;
}
```
### Animation
- Animation can be done with the `animation` property with and by defining a `@keyframe`
- To animate an element you must
	- use `animation-name: the-name;` to associate an element with a `@keyframe`
	- use `animation-duration: time;` to define how long the animation should take
- To create a `@keyframe`
	- define a `@keyframe the-name{...}`
	- define key points in the animation
		- use `from{...}` and `to{...}` create start and end points
		- More docs [here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animations/Using_CSS_animations)
### Flexbox
- Flex allows you to change the visuals of your website in response to changes from the user
	- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox)
- To make an object a flex object
	- `display: flex;`
- `flex-direction` has multiple orientations
	- `column`
	- `row`
	- `column-reverse`
	- `row-reverse`
		- These last two move the objects to the bottom or right respectively
- You can create divisions on the screen with flex using this syntax
	- `flex: 1 20px;`
	- This declaration has a few parts
		- The `1` refers to the proportion of the screen the element will take up
		- The `20px` gives the base hight of the element
	- `flex: 0 20em` means this element will only take up `20em` and won't grow to fill their proportion of the screen
- 
### Media Queries
- Media queries allow us to design a website to dynamically change designs based on screen size
	- [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- Syntax
```css
@media (orientation: portrait) {
  main {
    flex-direction: column;
  }
}

@media (max-height: 700px) {
  header {
    display: none;
  }
  footer {
    display: none;
  }
}
```
- The `@media` acts as a little css file that only gets called on if the given conditions are met
- There is a lot of ways you can change your website based on media queries so go to MDN and read some more and add notes
## Frameworks (Bootstrap)
- CSS Frameworks allow your website's css to be consistent between browsers and allow for easier dynamic resizing, like going from mobile to computer
- For this course we us Bootstrap but Tailwind CSS is becoming more popular
- [Quick start guide](https://getbootstrap.com/docs/5.2/getting-started/introduction/)
- CSS Link
```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />
  </head>
  <body>
    ...
  </body>
</html>
```
- JavaScript link (needed for some functionality like dropdowns)
```HTML
<body>
  ...

  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4"
    crossorigin="anonymous"
  ></script>
</body>
```
- You can also download bootstrap to your project with NPM
```Bash
npm install bootstrap@5.2.3
```
- Bootstrap has predefined styles you can easily implement by adding to the class list of an html element
```HTML
// Bootstrap styled button
<button type="button" class="btn btn-primary">Bootstrap</button>

// Default browser styled button
<button type="button">Plain</button>
```
- Here are some BootStrap options you can put in you project

| Class Option | Element                                                                    | Explanation |
| ------------ | -------------------------------------------------------------------------- | ----------- |
|              | [Accordian](https://getbootstrap.com/docs/5.2/components/accordion/)       |             |
|              | [Alerts](https://getbootstrap.com/docs/5.2/components/alerts/)             |             |
|              | [Badges](https://getbootstrap.com/docs/5.2/components/badge/)              |             |
|              | [Breadcrumb](https://getbootstrap.com/docs/5.2/components/breadcrumb/)     |             |
|              | [Button](https://getbootstrap.com/docs/5.2/components/buttons/)            |             |
|              | [Button group](https://getbootstrap.com/docs/5.2/components/button-group/) |             |
|              | [Card](https://getbootstrap.com/docs/5.2/components/card/)                 |             |
|              | [Carousel](https://getbootstrap.com/docs/5.2/components/carousel/)         |             |
|              | [Close Button](https://getbootstrap.com/docs/5.2/components/close-button/) |             |
|              | ect...                                                                     |             |


## JavaScript
### Basics
- Officially called ECMAScript
	- Weakly typed
		- Has types but does not require you to declare them
		- Types will be smushed into another type if the equations require it
		- ie `console.log('5' + 6) -> '56'` 
	- Borrows concepts from C, Java, and Schemes
- `console.log(...)` is a great way to debug
	- gives an output in the browser's console
- There are a few ways to declare a function
	- `function funcName(){...}`
	- `() => {...}`
- Comments are declared like this
	- `// Line comments`
```JavaScript
/*
Block comments
*/
```
- Semicolons signal the end of a line
	- They are not necessary but will aid in code readability
- `{}` define a scope which has implications for variables, if they are seen or not
### JS Console
- JavaScript console gives programers flexibility in debugging
	- It's similar to the terminal or command line on a computer but is it's own distinct object in JavaScript
- The console object provides functionality for outputting the value of text and objects, running timers, and counting iterations
- You can also run javascript from the console directly symply by typing or pasting it in
- Console options [MDN](https://developer.mozilla.org/en-US/docs/Web/API/console) 
```ECMAScript
console.log('Log this') // -> Log this
console.time('timer lable') // Starts a timer to track the speed of a function
console.endTime('timer lable') // Ends a timer and gives the time in milliseconds
console.count('a') // Counts the amount of times a function is called (using the lable in the parenthesis)
```
- ⌥+⌘+I  for Mac or \^+Shift+I for Windows and Linux to open dev tools and access the console in Google Chrome
	- also fn+f12 for Mac and f12 for windows and linux
### Adding JS to HTML
- You can add JavaScript to HTML in a few ways
- Way 1
	- Wrapping your JS in the `<script>...</script>` tags directly in your HTML files
		- This can be a bit messy but for simple JS can make your project less complicated to look at
- Way 2
	- Adding a link to a .js file using `<script src="file.js"></script>` 
		- This is useful when working with more complicated JS
		- It is recommended to put this at the very end of your main section that way all your HTML is rendered and in scope of you JS
- Way 3
	- Some HTML elements have built in attributes that create event listeners for different DOM events, events that happen in your website, and call that JS function/code
		- This can be nice to see the full functionality of a event generating element directly in the HTML instead of using the `element.addEventListener(event,function)` in your JS file
		- Typically not used from what I can tell
	- ex
``` HTML
<button onclick="sayHello()">Say Hello</button> 
<!-- Calls the "sayHello()" JS function when selected -->

```
### Type and Construct
- There are two ways to declare a variable in JavaScript `let` and `const`
	- there is a third, `var`, but it is just used for legacy code, prior to the addition to `let`, because it has some strange functionality and is harder to debug
- `let` defines a variable that can change its value while `const` cannot change it's value
	- default to using `const` where possible to insure less bugs and safer code
- There are 7 different primitive types native to JavaScript

|    Type     |                                                    Meaning |
| :---------: | ---------------------------------------------------------: |
|   `Null`    | The type of a variable that has not been assigned a value. |
| `Undefined` |          The type of a variable that has not been defined. |
|  `Boolean`  |                                         `true` or `false`. |
|  `Number`   |                                    A 64-bit signed number. |
|  `BigInt`   |                           A number of arbitrary magnitude. |
|  `String`   |                          A textual sequence of characters. |
|  `Symbol`   |                                            A unique value. |
- Boolean, Number, and String are the most common but you will probably run into Null and Undefined as well
- JavaScript also has several object types
	- The most frequent ones are

| Type       | Use                                                                                    | Example                  |
| ---------- | -------------------------------------------------------------------------------------- | ------------------------ |
| `Object`   | A collection of properties represented by name-value pairs. Values can be of any type. | `{a:3, b:'fish'}`        |
| `Function` | An object that has the ability to be called.                                           | `function a() {}`        |
| `Date`     | Calendar dates and times.                                                              | `new Date('1995-12-17')` |
| `Array`    | An ordered sequence of any type.                                                       | `[3, 'fish']`            |
| `Map`      | A collection of key-value pairs that support efficient lookups.                        | `new Map()`              |
| `JSON`     | A lightweight data-interchange format used to share information across programs.       | `{"a":3, "b":"fish"}`    |
- More of the above on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
### Type conversion
- JavaScript is a weakly typed language and can allow for some type conversion as needed
- ex
```JavaScript
2 + '3';
// OUTPUT: '23'
2 * '3';
// OUTPUT: 6
[2] + [3];
// OUTPUT: '23'
true + null;
// OUTPUT: 1
true + undefined;
// OUTPUT: NaN
```
- This functionality can get a bit confusing but just be aware of it because your code might have some unexpected outcomes because of it
- Also be aware that `==` and `===` are different operators
	- `==` coerces the variables then checks if the statement is true 
		- sometimes referred to truthy or falsy
	- `===` checks to see if the type and the value are equivalent
### Conditionals and Loops
- If, If Else, and Else create conditional statements that spread over multiple lines
```JavaScript
if (a === 1) {
  //...
} else if (b === 2) {
  //...
} else {
  //...
}
```
- Ternary operation is a great way to create a compact If Else statement
```JavaScript
a === 1 ? console.log(1) : console.log('not 1');
// The same as
if (a === 1) {
  console.log(1)
} else {
  console.log('not 1')
}
```
- Ternary operations (at least for me) can be a bit confusing
	- here is a bit of a break down
	- `a === 1` is the conditional statement that is either true or false
	- `?` asks if the statement is true or false then picks the appropriate response
	- `console.log(1) : console.log('not 1');` defines what to do if the statement is true, the left statement, or if the statement is false, the right statement
- You can also use other boolean expressions to add extra complexity to your conditional statement

| Expression        | Use |
| ----------------- | --- |
| `&&`              | and |
| <code>\|\|</code> | or  |
| `!`               | not |
- Loops are used in many applications to iterate until a condition is met (or to break your code if you have a never ending loop)
- JavaScript has many different types of loops 

| Loop                       | Use                                                                                                                       |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `for() {}`                 | Repeat the bracketed code until the conditional in the parenthesis is true                                                |
| `do{} while()`             | Do the bracketed code until the conditional in the parenthesis is false (Does the code first then checks the conditional) |
| `while() {}`               | Do the bracketed code until the conditional in the parenthesis is false (Checks the conditional first then does the code) |
| `for(const key in obj) {}` | Does the bracketed code until every key in a key/value pair or index in an array has been iterated over                   |
| `for(const val of obj) {}` | Does the bracketed code until every value in a key/value pair or value in an array has been iterated over                 |

- For loop example
	- the `i++` is the increment operator and is equivalent to `i = i + 1`
		- a similar operator is `i--`
```JavaScript
for (let i = 0; i < 2; i++) {
  console.log(i);
}
// OUTPUT: 0 1
```
- Do While loop example
```JavaScript
let i = 0;
do {
  console.log(i);
  i++;
} while (i < 2);
// OUTPUT: 0 1
```
- While loop example
```JavaScript
let i = 0;
while (i < 2) {
  console.log(i);
  i++;
}
// OUTPUT: 0 1
```
- For In loop example
	- gives the `name` of the object or the index in an array
```JavaScript
const obj = { a: 1, b: 'fish' };
for (const name in obj) {
  console.log(name);
}
// OUTPUT: a
// OUTPUT: b

const arr = ['a', 'b'];
for (const name in arr) {
  console.log(name);
}
// OUTPUT: 0
// OUTPUT: 1
```
- For Of loop example
	- gives the `values` in an array or object
```JavaScript
const arr = ['a', 'b'];
for (const val of arr) {
  console.log(val);
}
// OUTPUT: 'a'
// OUTPUT: 'b'
```
- JavaScript offers `break` and `continue` statements to add some extra logic to your loops
	- `break` will stop your loops entirely "breaking" you out of them
	- `continue` will stop your current iteration and "continue" onto the next iteration
	- ex
```JavaScript
let i = 0;
while (true) {
  console.log(i);
  if (i === 0) {
    i++;
    continue;
  } else {
    break;
  }
}
// OUTPUT: 0 1
```
### Strings
- Strings can be declared in JavaScript using single quotes , double quotes , or backticks
```JavaScript
'a'
"b"
`c`
```
- While single quotes and double quotes are the same, a backtick defines a "string literal"
- String Literals are evaluated may have portions that is bracketed and evaluates the string at the moment it is called
	- This is declared as follows using a dollar sign followed by curly brackets `${...}` 
	- This is similar to Python f-strings
```JavaScript
const l = 'literal';
console.log(`string ${l + (1 + 1)} text`);
// OUTPUT: string literal2 text
```
- JavaScript is Unicode supported meaning it defines a string using a sequence of 16-bit, unsigned integers 
	- This allows your website to use almost all written languages including those written right to left like Arabic and Hebrew
	- Here is a link to [W3](https://www.w3.org/mission/internationalization/) to learn how to internationalize your website farther
- Strings have many functions to modify or gain information from them
	- more info at [W3](https://www.w3schools.com/js/js_string_methods.asp)
	- ex

| Function              | Meaning                                                     |
| --------------------- | ----------------------------------------------------------- |
| `x.length`            | Returns the number of chars in a string                     |
| `x.indexOf("...")`    | Returns the index of a given substring                      |
| `x.split("...")`      | Splits the string into an array of strings at the delimiter |
| `x.startsWith("...")` | Returns true if the string starts with the given substring  |
| `x.endsWith("...")`   | Returns true if the string ends with the given substring    |
| `x.toLowerCase()`     | Converts the entire string to lower case                    |
```JavaScript
const s = 'Example:조선글';

console.log(s.length);
// OUTPUT: 11
console.log(s.indexOf('조선글'));
// OUTPUT: 8
console.log(s.split(':'));
// OUTPUT: ['Example', '조선글']
console.log(s.startsWith('Ex'));
// OUTPUT: true
console.log(s.endsWith('조선글'));
// OUTPUT: true
console.log(s.toLowerCase());
// OUTPUT: example:조선글
```

### Functions
- JavaScript functions are "first class functions"
	- meaning they have names, can be passed as parameters, returned as a result, and referenced from and object or array like any other variable
- Functions are typically declared using the `function` keyword
```JavaScript
function hello(who) {
  return 'hello ' + who;
}

console.log(hello('world'));
// OUTPUT: hello world
```
- Functions don't need returns
	- These functions typically have some side affect like giving a console.log or changing a global variable's value for example
- When a function is called, the caller can provide parameters, values within the parentheses, to the function
	- If parameters are not given but expected, those parameters are not given values, they will be assigned `Undefined`
	- You can also assign a default value to the parameters by using an equal sign after the parameter and giving it a value
```JavaScript
function labeler(value, title = 'title') {
  console.log(`${title}=${value}`);
}

labeler();
// OUTPUT: title=undefined

labeler('fish');
// OUTPUT: title=fish

labeler('fish', 'animal');
// OUTPUT: animal=fish
```
- Functions can be an anonymous function by assigning it to a variable
	- This allows the function to be given as a parameter in a function or returned from a function
```JavaScript
// Function that takes a function as a parameter
function doMath(operation, a, b) {
  return operation(a, b);
}

// Anonymous function assigned to a variable
const add = function (a, b) {
  return a + b;
};

console.log(doMath(add, 5, 3));
// OUTPUT: 8

// Anonymous function assigned to a parameter
console.log(
  doMath(
    function (a, b) {
      return a - b;
    },
    5,
    3
  )
);
// OUTPUT: 2
```
- Functions can also be created inside other functions giving some more modularity and privacy to functions
### Arrow Functions
- Arrow functions were created to remove the need to use the `function` keyword to create anonymous functions
- They are declared like this `() => {...}`
	- If the function isn't multiline you don't need the curly brackets
```JavaScript
const a = [1, 2, 3, 4];

// standard function syntax
a.sort(function (v1, v2) {
  return v1 - v2;
});

// arrow function syntax
a.sort((v1, v2) => v1 - v2);
```
- There are other constraints to arrow functions like not being used for constructors or iterator generators
	- I think this is for safety reasons so you can't hack stuff using arrow functions?
- Arrow functions do not require a `return` if there are no curly brackets and there is only one line
```JavaScript
() => 3;
// RETURNS: 3

() => {
  3;
};
// RETURNS: undefined

() => {
  return 3;
};
// RETURNS: 3
```
- Arrow functions inherit the `this` pointer from the scope in which they are created
	- This makes a `closure` allowing functions to keep referencing their created scope
```JavaScript
function makeClosure(a) {
  a = 'a2';
  const b = 'b2';
  return () => [a, b]; //This arrow function will continue to reference the a and b variables in the scope of the makeClosure function
}

const a = 'a';
const b = 'b';

const closure = makeClosure(a);

console.log(closure());
// OUTPUT: ['a2', 'b2']
// values from the make closure function

console.log(a, b);
// OUTPUT: 'a' 'b'
```
- Here is an example of a `debounce` function that helps manage spammed inputs from a user
	- This listens to the `scroll` event and gives a 500 second cooldown between scrolls  and clears the countdown if another scroll event happens
```JavaScript
window.addEventListener(
  'scroll',
  debounce(500, () => {
    console.log('Executed an expensive calculation');
  })
);

function debounce(windowMs, windowFunc) {
  let timeout;
  return function () {
    console.log('scroll event');
    clearTimeout(timeout);
    timeout = setTimeout(() => windowFunc(), windowMs);
  };
}
```

### Arrays
- An array is list of objects or primitives
	- declared like a variable with a `[...]` on the right side of the equal sign
- Here is a list of functions you can do with arrays

|Function|Meaning|Example|
|---|---|---|
|push|Add an item to the end of the array|`a.push(4)`|
|pop|Remove an item from the end of the array|`x = a.pop()`|
|slice|Return a sub-array|`a.slice(1,-1)`|
|sort|Run a function to sort an array in place|`a.sort((a,b) => b-a)`|
|values|Creates an iterator for use with a `for of` loop|`for (i of a.values()) {...}`|
|find|Find the first item satisfied by a test function|`a.find(i => i < 2)`|
|forEach|Run a function on each array item|`a.forEach(console.log)`|
|reduce|Run a function to reduce each array item to a single item|`a.reduce((a, c) => a + c)`|
|map|Run a function to map an array to a new array|`a.map(i => i+i)`|
|filter|Run a function to remove items|`a.filter(i => i%2)`|
|every|Run a function to test if all items match|`a.every(i => i < 3)`|
|some|Run a function to test if any items match|`a.some(i => i < 1)`|
- example of some of the functions
```JavaScript
const a = [1, 2, 3];

console.log(a.map((i) => i + i));
// OUTPUT: [2,4,6]
console.log(a.reduce((v1, v2) => v1 + v2));
// OUTPUT: 6
console.log(a.sort((v1, v2) => v2 - v1));
// OUTPUT: [3,2,1]

a.push(4);
console.log(a.length);
// OUTPUT: 4
```

### JSON
- JSON stands for 'JavaScript Object Notation'
	- JSON is used as a way to pass JavaScript objects as text strings and can be easy to convert to and from
- JSON allows 6 different data types

| Type    | Example                 |
| ------- | ----------------------- |
| string  | "crockford"             |
| number  | 42                      |
| boolean | true                    |
| array   | [null,42,"crockford"]   |
| object  | {"a":1,"b":"crockford"} |
| null    | null                    |
- Most of the time JSON contains an object with key/value pairs
	- The key must be a string but the value can any valid data type
- Here is an example of a JSON doc
```JavaScript
{
  "class": {
    "title": "web programming",
    "description": "Amazing"
  },
  "enrollment": ["Marco", "Jana", "فَاطِمَة"],
  "start": "2025-02-01",
  "end": null
}
```
- You can convert to and from JSON and JavaScript using `JSON.parse` and `JSON.stringify`
```JavaScript
const obj = { a: 2, b: 'crockford', c: undefined };
const json = JSON.stringify(obj);
const objFromJson = JSON.parse(json);

console.log(obj, json, objFromJson);

// OUTPUT:
// {a: 2, b: 'crockford', c: undefined}
// {"a":2, "b":"crockford"}
// {a: 2, b: 'crockford'}
```

### Object
- JS objects is a collection of name value pairs where the name is a string and the value can be anything
	- bool, string, objects, functions, etc...
- Objects also have other object-oriented functionalities like a constructor, a `this` pointer, static properties and functions, and inheritance
- You can also add properties to classes by referencing the new properties name and it's value
- You can call properties using two different syntaxes
	- `obj.prop` or `obj['prop']`
- ⚠️ The term 'object' can refer to three different things in JS
	- Standard JS Objects: Promise, Map, Object, Function, Date, ...
	- JS 'Object' object: `= new Object({...});`
	- JS object created using object literal syntax `const obj = {...};`
- Objects also have some static functions as well
	- some examples

|Function|Meaning|
|---|---|
|entries|Returns an array of key value pairs|
|keys|Returns an array of keys|
|values|Returns an array of values|
```JavaScript
const obj = {
  a: 3,
  b: 'fish',
};

console.log(Object.entries(obj));
// OUTPUT: [['a', 3], ['b', 'fish']]
console.log(Object.keys(obj));
// OUTPUT: ['a', 'b']
console.log(Object.values(obj));
// OUTPUT: [3, 'fish']
```
- A constructor is any function that returns an object and can be invoked with the `new` operator
```JavaScript
function Person(name) {
  return {
    name: name,
    log: function () {
      console.log('My name is ' + this.name);
    },
  };
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```
- The `this` keyword is a pointer pointing back to the most recent parent object
	- Meaning if there is an object nested in another object or if an class inherits from another class, the `this` pointer always points to the object that it is in
### Classes
- A class is a type of object that typically get used as reusable components rather than one off objects
- Using class declaration you are required to explicitly declare a constructor
```JavaScript
class Person {
  constructor(name) {
    this.name = name;
  }

  log() {
    console.log('My name is ' + this.name);
  }
}

const p = new Person('Eich');
p.log();
// OUTPUT: My name is Eich
```
- You can also make class components private using the `#` symbol
```JavaScript
class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

const p = new Person('Eich');
p.#name = 'Lie';
// OUTPUT: Uncaught SyntaxError: Private field '#name' must be declared in an enclosing class
```
- Classes can also inherit from other classes to create more dynamic code
- To inherit from another class, you have to use the `extends` keyword and use the `super` keyword to pass any parameters back up to the parent component
```JavaScript
class Person {
  constructor(name) {
    this.name = name;
  }

  print() {
    return 'My name is ' + this.name;
  }
}

class Employee extends Person {
  constructor(name, position) {
    super(name);
    this.position = position;
  }

  print() {
    return super.print() + '. I am a ' + this.position;
  }
}

const e = new Employee('Eich', 'programmer');
console.log(e.print());
// OUTPUT: My name is Eich. I am a programmer
```
### Regular Expressions
- Regular expressions are natively supported by JS
	- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions)	 
- There are two ways to declare them
	- Using the `var = new RegEx('regex', 'nonregex?')` (not sure if the second value is correct but the first is)
 	- Using a literal `var = /regex/nonregex`
- The string class has functions that accept regex
	- `match()`, `replace()`, `search()`, and `split()`
 	- You can also use the `test()` function to see if there is a match
```JavaScript
const petRegex = /(dog)|(cat)|(bird)/gim;
const text = 'Both cats and dogs are pets, but not rocks.';

text.match(petRegex);
// RETURNS: ['cat', 'dog']

text.replace(petRegex, 'animal');
// RETURNS: Both animals and animals are pets, but not rocks.

petRegex.test(text);
// RETURNS: true
```
### Rest and Spread
- The rest syntax in JS allows functions to take any number of unknown values
	- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
	- This can be useful when a function can test an array of values
 	- It dynamically creates an array from a series of input values
  	- It can also be useful to protect a function from being called with too many values by collecting the excess values and ignoring them
```javascript
function hasNumber(test, ...numbers) {
  return numbers.some((i) => i === test);
}

hasNumber(2, 1, 2, 3);
// RETURNS: true
```
- Only the last parameter is can be a 'rest' variable
- This functionality creates what is called 'variadic functions'
- Spread is like 'anti-rest'
	- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax )
- Spead takes an iteratable object, like an array or string, and spreads it out into a function parameters
```javascript
function person(firstName, lastName) {
  return { first: firstName, last: lastName };
}

const p = person(...['Ryan', 'Dahl']);
console.log(p);
// OUTPUT: {first: 'Ryan', last: 'Dahl'}
```
### Exceptions
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
- JS exceptions are emplemented using `try`, `catch`, `finale` syntax
```javascript
try {
  // normal execution code
} catch (err) {
  // exception handling code
} finally {
  // always called code
}
```
- It is tempting to use exception handling for everything but it should be reserved for code braking issues
	- Try using `if else` statments for common user input issues
- `try` `catch` blocks are common for 'fallbacks' in code
	- Fall backs allow for you application to continue to run even if something exceptional happens like you temporaraly unable to access and API or the internet connection drops
```javascript
function getScores() {
  try {
    const scores = scoringService.getScores();
    // store the scores so that we can use them later if the network is not available
    window.localStorage.setItem('scores', scores);
    return scores;
  } catch {
    return window.localStorage.getItem('scores');
  }
}
```
### Destructuring
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- De-Structuring, not destructing, pulls items out of existing structures like arrays or objects
- The syntax is similar to declaring an array except the square brackets are on the left side of the equals sign
	- You can also use rest syntax to grab the rest of the values not being removed
```javascript
const a = [1, 2, 4, 5];

const [b, c, ...others] = a;

console.log(b, c, others);
// OUTPUT: 1, 2, [4,5]
```
- Destructuring objects uses curly brackets and you must specify which values you want to grab
```Javascript
const o = { a: 1, b: 'animals', c: ['fish', 'cats'] };

const { a: count, b: type } = o;

console.log(count, type);
// OUTPUT 1, animals
```
- You can also provide values for any missing values from the list or object
	- Kinda strange but I guess it's incase APIs or users don't add all the needed values
```javascript
const { a, b = 22 } = {};
const [c = 44] = [];

console.log(a, b, c);
// OUTPUT: undefined, 22, 44
```
- You can also use destructuring to reassign variables as well not just making constants
### Scope
### Modules
### Document Object Model (DOM)
### LocalStorage
### Promises
### Async/Await
### Debugging
### Node.js
### Debugging Node.js
## Web Frameworks
### Intro
- Web frameworks are tools web developers use to make web developing easier
	- Many use a combination of HTML, CSS, and JavaScript to create their own file type
		- Ex React JSX, Vue SFC, and Svelte files
	- Frameworks help modularizing code, creating single page applications, simplifying reactivity, and supporting diverse hardware devices
- React is the most popular framework, you can check [here](https://stateofjs.com/en-US)
- Here are some examples of 4 different styles of web frameworks
- #### React (JSX and CSS)
```JSX
import 'hello.css';

const Hello = () => {
  let name = 'world';

  return <p>Hello {name}</p>;
};
```

```CSS
p {
  color: green;
}
```

- #### Angular component (JS, CSS, and HTML)
```JavaScript
@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
})
export class HelloWorldComponent {
  name: string;
  constructor() {
    this.name = 'world';
  }
}
```

```CSS
p {
  color: green;
}
```

```HTML
<p>hello {{name}}</p>
```

- #### Vue (SFC)
```SFC
<script>
  export default {
    data() {
      return {
        name: 'world',
      };
    },
  };
</script>

<style>
  p {
    color: green;
  }
</style>

<template>
  <p>Hello {{ name }}!</p>
</template>
```

- #### Svelte (Svelte file)
```Svelte
<script>
  let name = 'world';
</script>

<style>
  p {
    color: green;
  }
</style>

<p>Hello {name}!</p>
```

## React
### Intro to React
- React [MDN](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started)
- React was originally created for Facebook's new feed but showed enough strength that it became the framework of Instagram's UI
- React abstracts HTML and JS into a new file type called JSX, JavaScript XML
	- All JavaScript function, I believe, can be used in React but React has some extra *flavor*
	- XML means "Extensible Markup Language" and has similar syntax to HTML
- JSX will be converted into valid JavaScript using the [Babel](https://babeljs.io/) preprocessor
- This JSX will be converted to the following JavaScript
```JSX
const i = 3;
const list = (
  <ol class='big'>
    <li>Item {i}</li>
    <li>Item {3 + i}</li>
  </ol>
);
```

```JavaScript
const i = 3;
const list = React.createElement(
  'ol',
  { class: 'big' },
  React.createElement('li', null, 'Item ', i),
  React.createElement('li', null, 'Item ', 3 + i)
);
```
- The `React.createElement` generates DOM elements and monitors the data they represent for changes
	- If any changes are detected, React will trigger dependent changes
### React Components
- React components allow you to modularize the functionality of your application
	- They act similar to function calls that return HTMl to render
- They also allow for the reuse of common components
	- Like reusing a function or creating new instances of classes in Python or other languages
- Here is an example of a component in JSX, the component code, and the resulting HTML
```JSX
function Demo() {
  const who = 'world';
  return <b>Hello {who}</b>;
}

<div>
  Component: <Demo />
</div>
```

```HTML
<div>Component: <b>Hello world</b></div>
```
- Component properties allow you to pass information to the component to render
```JSX
function Demo(props) {
  return <b>Hello {props.who}</b>;
}

<div>Component: <Demo who="Walke" /><div>
```

```HTML
<div>Component: <b>Hello Walke</b></div>
```
- You can also call the `.render(varHTML, document.getElement(...))` to render HTML without using components
```JSX
const hello = <div>Hello</div>;

ReactDOM.render(hello, document.getElementById('root'));
```
### React States
- Component states can be called using `React.useState` hook function
	- `.useState` creates a state/variable and a function used to update that variable
- States can be useful for passing states and the update function to child components in you DOM
	- Passing a state down to child states can help keep updated information in a parent element to be used later
- Ex
```JSX
const Clicker = () => {
  const [clicked, updateClicked] = React.useState(false);

  const onClicked = (e) => {
    updateClicked(!clicked);
  };

  return <p onClick={(e) => onClicked(e)}>clicked: {`${clicked}`}</p>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Clicker />);
```
### Router
- React routers allow for single page applications to be more reactive to the user
	- The give the impression of displaying multiple html files but actually define one html file that dynamically changes depending on how the user want's routed
- React doesn't have a router our of the box so there are many different routers to choose from
	- We use [react-router-dom](https://www.npmjs.com/package/react-router-dom) v6
	- Make sure you find the right tutorials because there are many different versions that have different tutorials
		- There is also [react-router](https://www.npmjs.com/package/react-router) which is not the same. It's actually what react-router-dom is derived from but is more complex
- Here is a basic nav bar using react-router-dom
```JavaScript
// Inject the router into the application root DOM element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // BrowserRouter component that controls what is rendered
  // NavLink component captures user navigation requests
  // Routes component defines what component is routed to
  <BrowserRouter>
    <div className='app'>
      <nav>
        <NavLink to='/'>Home</Link>
        <NavLink to='/about'>About</Link>
        <NavLink to='/users'>Users</Link>
      </nav>

      <main>
        <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/about' element={<About />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
    </div>
  </BrowserRouter>
);
```
### Reactivity
- Reactivity in React is accomplished with three different elements
	- `prop`, `state`, and `render`
- When JSX is rendered, React parses the JSX for any `prop` or `state` elements and monitors them
	- When they are updated, React a uses `render` to render any changes that may have occurred
- This JSX demonstrates the asynchronous behavior of React
	- When we call an `updateState`, it does not mean that the updated state is immediately available in the next line of code
	- This call is asynchronous, meaning it is happening behind the scenes, so it might not be completed by your next line of code
		- It will happen eventually  `¯\_(ツ)_/¯`
```JavaScript
const Survey = () => {
  const [color, updateColor] = React.useState('#737AB0');

  // When the color changes update the state
  const onChange = (e) => {
    updateColor(e.target.value);
  };

  return (
    <div>
      <h1>Survey</h1>

      {/* Pass the Survey color  as a parameter to the Question.
          When the color changes the Question parameter will also be updated and rendered. */}
      <Question answer={color} />

      <p>
        <span>Pick a color: </span>
        {/* Set the Survey color state as a the value of the color picker.
            When the color changes, the value will also be updated and rendered. */}
        <input type='color' onChange={(e) => onChange(e)} value={color} />
      </p>
    </div>
  );
};

// The Question component
const Question = ({ answer }) => {
  return (
    <div>
      {/* Answer rerendered whenever the parameter changes */}
      <p>Your answer: {answer}</p>
    </div>
  );
};

ReactDOM.render(<Survey />, document.getElementById('root'));
```
### React Hooks
- React hooks allow for a function based approach to React instead of a class based approach
	- There are many different hooks you can use [W3](https://www.w3schools.com/react/react_hooks.asp)
	- This is becoming the standard way to create reactive webpages
	- Hooks are created with the `.useState` or `.useEffect` hooks
- `.useState` creates a state hook that is comprised of a `const` value and an update function
	- typically looks like `const [value, updateValue] = React.useState(initialValue);`
	- the `initialValue` can be any value valid in React
	- You can't change this value directly, you must use the `updateValue` function
		- `updateValue(newValue)` then the updated value is used after React updates it
- `useEffect` is called every time a component is rendered. More from [W3](https://www.w3schools.com/react/react_useeffect.asp)
	- This can be useful for 'clean up' functions or any side effects you want from the function
	- This `useEffect` console logs 'render' every time the component is rendered or re-rendered and returns the function `cleanup()`
	- Cleaning up is useful to minimize memory leaks
		- Some effects require this like timers
```JavaScript
function UseEffectHookDemo() {
  const [count, updateCount] = React.useState(0);
  React.useEffect(() => {
    console.log('rendered');

    return function cleanup() {
      console.log('cleanup');
    };
  });

  return <div onClick={() => updateCount(count + 1)}>useEffectExample {count}</div>;
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```
- Hook dependencies allow the `useEffect` hook to only be called when a specific variable is updated
	- Think of it as an 'if' statement
		- Call function 'if' variable is updated
	- Dependencies are declared using \[] as a second parameter in `useEffect`
		- `useEffect(() => ... , [dependency])`
		- If you want the `useEffect` hook to only be called on the component's first render, use empty brackets as your second parameter
- Hooks can only be called in functional style components and only at the top of the scope of the function
	- Hooks **cannot** be called in conditionals or loops
		- This restriction means hooks must be called in the same order each time a component is rendered
- Here is an example of everything we talked about with these hooks
	- This `useEffect` is only used when `count1` is updated
```JavaScript
function UseEffectHookDemo() {
  const [count1, updateCount1] = React.useState(0);
  const [count2, updateCount2] = React.useState(0);

  React.useEffect(() => {
    console.log(`count1 effect triggered ${count1}`);
  }, [count1]);

  return (
    <ol>
      <li onClick={() => updateCount1(count1 + 1)}>Item 1 - {count1}</li>
      <li onClick={() => updateCount2(count2 + 1)}>Item 2 - {count2}</li>
    </ol>
  );
}

ReactDOM.render(<UseEffectHookDemo />, document.getElementById('root'));
```

## Toolchains
- Toolchains are the set of tools used to create and deploy web projects
- The toolchain that we use for our React project consists of [GitHub](https://github.com/) as the code repository, [Vite](https://vitejs.dev/) for JSX, TS, development and debugging support, [ESBuild](https://esbuild.github.io/) for converting to ES6 modules and transpiles (with [Babel](https://babeljs.io/docs/en/) underneath), [Rollup](https://rollupjs.org/) for bundling and tree shaking, [PostCSS](https://learn.cs260.click/page/webFrameworks/react/toolChains/toolChains_md) for CSS transpiring, and finally a simple bash script (deployReact.sh) for deployment.
	- from the course lessons

## Vite
- We are using Vite to create and bundle our React projects
- Vite has useful tools for web programming like 
	- Creating a temporary dev environment to see your website in a browser
	- Use nonstandard CSS and JS, like Typescript and JSX
	- Quickly bundle code
	- Great debugging support
- Create a quick React app with Vite
```Bash
npm create vite@latest demoVite -- --template react
cd demoVite
npm install
npm run dev
```
- There are many different files created but the important ones are
	- index.html
		- This is the file that contains the `#Root` element for React to attach to 
		- This also includes the script tag that connects the `src/main.jsx` to the HTML document
	- src/main.jsx
		- This is the access point for the React app to connect to `index.html`
	- src/App.jsx
		- This is the main location to do your app programming
	- src/index.css
		- This is the CSS for the entire application
	- src/App.css
		- This is the CSS for the top level app component
- There are a few different files and folders as well that you typically do not need to directly edit
	- The `.json` files contain the 'setting' for Node
	- The `vite.config.js` file in the main folder contains the configuration setting for Vite
- Any time you need to add extra JS to this project, use the `.jsx` extension for the file because Babel will interpret your files differently based on their extension
	- To make sure it transpiles correctly use the `.jsx` extension
- To create a deployable application use 
```Shell
npm run build
```
- This will create a `dist` directory containing your deployable project
	- You can then use the `deployReact.sh` to deploy your project to your server

## HTTP Service
### The Internet
- The internet, basically, is a net of connected computers, connected with wires, wifi, satellites, etc., that send and receive data from each other
- When computers want to communicate, they must first have an IP address
	- For a human readable address, DNS servers provide domain names that can used to query the DNS servers to see if there is an associated IP address to connect to
	- You can find a website's IP address from the console using the `dig` command
		- `dig byu.edu` gives `byu.edu.		5755	IN	A	128.187.16.184`
- When you have the IP address, the computer hops between servers along the network till it finds the server associated with the IP address
	- You can track this hopping using `traceroute` in the console followed by the DNS domain name
	- This gives all the IP addresses of the servers you connected to prior to you desired server
- When sending and receiving files, the computers use the TCP/IP protocol
	- This protocol covers everything from HTTP down to the physical wires
	- The top layer is the application, web (HTTP), mail (SMTP), files (FTP), remote shell (SSH), and chat (IRC)
		- Below application is the file layer which chunks up the data and sends it the data
			- Below that is the actual internet which finds the server to talk to 
				- Finally is the physical level including wires and hardware
- The Layers

|Layer|Example|Purpose|
|---|---|---|
|Application|HTTPS|Functionality like web browsing|
|Transport|TCP|Moving connection information packets|
|Internet|IP|Establishing connections|
|Link|Fiber, hardware|Physical connections|
### Web Servers
- Web servers use to be specialized computers you would purchase with all the software you needed
	- Now, any computer can be a server
- Most modern programing languages have the ability to serve static files and listen to ports
	- Example using the 'Go' language
 	- Returns the current time using the `api/time
 ```Go
package main

import (
	"fmt"
	"io"
	"net/http"
	"time"
)

func getTime(w http.ResponseWriter, r *http.Request) {
	io.WriteString(w, time.Now().String())
}

func main() {
	// Serve up files found in the public_html directory
	fs := http.FileServer(http.Dir("./public_html"))
	http.Handle("/", fs)

	// Dynamically provide data
	http.HandleFunc("/api/time", getTime)

	// Listen for HTTP requests
	fmt.Println(http.ListenAndServe(":3000", nil))
}
```
 - Multiple website can be hosted on the same computer using gateways
 	- This is done using a gateway/reverse proxy
 	- Gateways allow for a server to listen to a single port and direct to different ports on the server depending on the request
	- We use Caddy to handle proxies and redirecting
 - Reverse proxies allow for something called microservices
 - Microservices are singe function services
 	- Combining microservices into larger web applications allows you to partician your app and manage server load
  	- You can run more or less stateless copies of your service on dynamic cloud enviroments
 - These concepts leads directly into serverless funtionality
 	- Serverless design allows you to simply write a function that speaks HTTP
  	- This function is loaded onto a gateway that directs requests to your function
   	- The gateway dynamically scales hardware requirments based on the demand
   	- This reduces web apps into single independent functions
### Domain names
 - Domain names is a string that follows specific naming conventions that gets listed in domain name regestries and gets associated with one or more IP addresses
 	- One domain name can connect to multiple IP addresses
  	- This can act as redundency for your web app
   		- If one server goes down, you can be redirected to another server that hosts the same app
 	- You can use the `dig` command plus the domain name to find all the IP addresses associated with your domain
 -  Domain name anatomy
 	- The root domain is the main thing you typically type into a search bar
  		- This consists of a secondary level domain and a top level domain
    			- Top level domains are you `.com`, `.org`, etc.
 			- Secondary level domains are like your web names like `google`, `github`, ect.
	- In addition, you can have optional subdomain prefixes
 		- Each subdomain can resolve into different IP addresses
 - You can use the `whois` console command followed by the domain name to get information about the domain registry
```Bash
➜  whois byu.edu

Domain Name: BYU.EDU

Registrant:
	Brigham Young University
	3009 ITB
	2027 ITB
	Provo, UT 84602
	USA

Administrative Contact:
	Mark Longhurst
	Brigham Young University
	Office of Information Technology
	1208 ITB
	Provo, UT 84602
	USA
	+1.8014220488
	markl@byu.edu

Technical Contact:
	Brent Goodman
	Brigham Young University
	Office of Information Technology
	1203J ITB
	Provo, UT 84602
	USA
	+1.8014227782
	dnsmaster@byu.edu

Domain record activated:    19-Jan-1987
Domain record last updated: 11-Jul-2022
Domain expires:             31-Jul-2025       
```
### DNS
- DNS servers are special servers that hold a registery of known domain names
	- These servers hold a list and a cache of known domain names and IP addresses
- All DNS servers reference a handfull of special DNS servers known as 'authorative name servers'
- DNS database records come in a few flavors but these two are the important ones for us to know
	- 'A' or address records maps the IP address to the domain name directly
 	- 'CNAME' or canonical name records maps one domain to another domain
  		- This allow the use of multiple domain names for a single web app
    		- You can use both `byu.com` and it redirects to `byu.edu` leading to the correct IP address
-  These are the steps a it takes to map to the correct IP address
	- You browser first checks if it has the correct IP address stored in its cache
 	- Next it checks the first DNS server to see if it has the IP address on record or in its cache
  	- Finally that DNS server will check an authorative name server to see if it has record of the IP address
   	- If all that fails, you get an unknow domain name error
- This extensive caching is done to increase the performance of finding the correct server
- Because there is so much caching, records have a 'time to live', TTL, that tells the cache how long it is allowed to store that record
	- This is necissary when domain names' information gets updated (like if the IP address associated changes)
 - Leasing a domain can be expensive and different services provide the opprotunity to buy a domain name and reregester it year after year
 	- different domain names cost different amounts
  	- AWS' Route 53 is one of the websites you can use to get a domain name
### URLs
- **U**niform **R**esource **L**ocator (URL) represents a web resource
	- It can be anything, like: web page, font, database, JSON object ...
- This is the basic syntax for a URL
	- `<scheme>://<domain name>:<port>/<path>?<parameters>#<anchor>`
	- You technically provide a username and password before the domain name but this is typically no longer the case except for things like databases

| Part        | Example                              | Meaning                                                                                                                                                                                                                                                                             |
| ----------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Scheme      | https                                | The protocol required to ask for the resource. For web applications, this is usually HTTPS. But it could be any internet protocol such as FTP or MAILTO.                                                                                                                            |
| Domain name | byu.edu                              | The domain name that owns the resource represented by the URL.                                                                                                                                                                                                                      |
| Port        | 3000                                 | The port specifies the numbered network port used to connect to the domain server. Lower number ports are reserved for common internet protocols, higher number ports can be used for any purpose. The default port is 80 if the scheme is HTTP, or 443 if the scheme is HTTPS.     |
| Path        | /school/byu/user/8014                | The path to the resource on the domain. The resource does not have to physically be located on the file system with this path. It can be a logical path representing endpoint parameters, a database table, or an object schema.                                                    |
| Parameters  | filter=names&highlight=intro,summary | The parameters represent a list of key value pairs. Usually it provides additional qualifiers on the resource represented by the path. This might be a filter on the returned resource or how to highlight the resource. The parameters are also sometimes called the query string. |
| Anchor      | summary                              | The anchor usually represents a sub-location in the resource. For HTML pages this represents a request for the browser to automatically scroll to the element with an ID that matches the anchor. The anchor is also sometimes called the hash, or fragment ID.                     |
- You will sometimes hear about URIs and URNs
- URIs are Uniform Resource Identifiers, 
	- Two subsets of this are URLs and URNs
- URN is a Uniform Resource Name
	- We don't deal with these because they don't specify a web resource 
### Ports
- Ports are necessary in addition to IP addresses to access a server's service
	- They allow a single device to support multiple protocols and services
- Ports can be exposed externally or internally
	- External ports are available for anyone on the internet to connect to
	- Internal ports are only available to internal connections like a local wifi connection or only to processes on the device itself
- While you can use any port of any service, there are standards set by the IANA
	- Ports 0 to 1023 are for standard protocols (ssh, http, etc)
	- Ports 1024 to 49151 represent ports assigned to requesting entities 
		- You are free to use these typically
	- Ports 49152 to 65535 are considered "dynamic" and can be used to create dynamic connections to a device
		- Pretty sure these are totally open to use
-  List of common ports

|Port|Protocol|
|---|---|
|20|File Transfer Protocol (FTP) for data transfer|
|22|Secure Shell (SSH) for connecting to remote devices|
|25|Simple Mail Transfer Protocol (SMTP) for sending email|
|53|Domain Name System (DNS) for looking up IP addresses|
|80|Hypertext Transfer Protocol (HTTP) for web requests|
|110|Post Office Protocol (POP3) for retrieving email|
|123|Network Time Protocol (NTP) for managing time|
|161|Simple Network Management Protocol (SNMP) for managing network devices such as routers or printers|
|194|Internet Relay Chat (IRC) for chatting|
|443|HTTP Secure (HTTPS) for secure web requests|
### HTTP
- **H**yper **T**ext **T**ransfer **P**rotocol is what allows a web client (web browser) to make a request to a web server
- There is a standard format for HTTP requests
	- `<verb>` is the type of request being made
	- `<url path>` is the path on the server
	- `<verson>` specifies which version of HTTP you wish to use
	- `<header key: value>` is optional and defines a key value pair
		- Has many uses though
	- `<body>` is optional and is defined with two new lines after the header
		- Additional content to your request
```HTTP
<verb> <url path, parameters, anchor> <version>
[<header key: value>]*
[

  <body>
]

i.e.
GET /hypertext/WWW/Helping.html HTTP/1.1
```
- The server's response has a similar format to the request
```HTTP
<version> <status code> <status string>
[<header key: value>]*
[

  <body>
]

i.e.
HTTP/1.1 200 OK
Date: Tue, 06 Dec 2022 21:54:42 GMT
Server: Apache
Last-Modified: Thu, 29 Oct 1992 11:15:20 GMT
ETag: "5f0-28f29422b8200"
Accept-Ranges: bytes
Content-Length: 1520
Connection: close
Content-Type: text/html

<TITLE>Helping -- /WWW</TITLE>
<NEXTID 7>
<H1>How can I help?</H1>There are lots of ways you can help if you are interested in seeing
the <A NAME=4 HREF=TheProject.html>web</A> grow and be even more useful...
```

- The `body` sections is defined by a `Content-Type` header
	- It can be anything from HTML to a binary image to JavaScript and JSON
- Cookies allow the servers to keep track of information on the client's browser
	- HTTP is a static request type which means it can't track new user information unless another request is sent
	- They can allow a service to remember a preferred language or even if the user was previously authorized
- The server first sends the cookie 
```HTTP
HTTP/2 200
Set-Cookie: myAppCookie=tasty; SameSite=Strict; Secure; HttpOnly
```
- Then the client catches and sends back the cookie on the next HTTP request
```HTTP
HTTP/2 200
Cookie: myAppCookie=tasty
```
### HTML request options
- Verbs

|Verb|Meaning|
|---|---|
|GET|Get the requested resource. This can represent a request to get a single resource or a resource representing a list of resources.|
|POST|Create a new resource. The body of the request contains the resource. The response should include a unique ID of the newly created resource.|
|PUT|Update a resource. Either the URL path, HTTP header, or body must contain the unique ID of the resource being updated. The body of the request should contain the updated resource. The body of the response may contain the resulting updated resource.|
|DELETE|Delete a resource. Either the URL path or HTTP header must contain the unique ID of the resource to delete.|
|OPTIONS|Get metadata about a resource. Usually only HTTP headers are returned. The resource itself is not returned.|
- Status codes basic
	- 1xx - Informational.
	- 2xx - Success.
	- 3xx - Redirect to some other location, or that the previously cached resource is still valid.
	- 4xx - Client errors. The request is invalid.
	- 5xx - Server errors. The request cannot be satisfied due to an error on the server.

| Code | Text                                                                                 | Meaning                                                                                                                           |
| ---- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 100  | Continue                                                                             | The service is working on the request                                                                                             |
| 200  | Success                                                                              | The requested resource was found and returned as appropriate.                                                                     |
| 201  | Created                                                                              | The request was successful and a new resource was created.                                                                        |
| 204  | No Content                                                                           | The request was successful but no resource is returned.                                                                           |
| 304  | Not Modified                                                                         | The cached version of the resource is still valid.                                                                                |
| 307  | Permanent redirect                                                                   | The resource is no longer at the requested location. The new location is specified in the response location header.               |
| 308  | Temporary redirect                                                                   | The resource is temporarily located at a different location. The temporary location is specified in the response location header. |
| 400  | Bad request                                                                          | The request was malformed or invalid.                                                                                             |
| 401  | Unauthorized                                                                         | The request did not provide a valid authentication token.                                                                         |
| 403  | Forbidden                                                                            | The provided authentication token is not authorized for the resource.                                                             |
| 404  | Not found                                                                            | An unknown resource was requested.                                                                                                |
| 408  | Request timeout                                                                      | The request takes too long.                                                                                                       |
| 409  | Conflict                                                                             | The provided resource represents an out of date version of the resource.                                                          |
| 418  | [I'm a teapot](https://en.wikipedia.org/wiki/Hyper_Text_Coffee_Pot_Control_Protocol) | The service refuses to brew coffee in a teapot.                                                                                   |
| 429  | Too many requests                                                                    | The client is making too many requests in too short of a time period.                                                             |
| 500  | Internal server error                                                                | The server failed to properly process the request.                                                                                |
| 503  | Service unavailable                                                                  | The server is temporarily down. The client should try again with an exponential back off.                                         |

- Headers

|Header|Example|Meaning|
|---|---|---|
|Authorization|Bearer bGciOiJIUzI1NiIsI|A token that authorized the user making the request.|
|Accept|image/*|The format the client accepts. This may include wildcards.|
|Content-Type|text/html; charset=utf-8|The format of the content being sent. These are described using standard [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) types.|
|Cookie|SessionID=39s8cgj34; csrftoken=9dck2|Key value pairs that are generated by the server and stored on the client.|
|Host|info.cern.ch|The domain name of the server. This is required in all requests.|
|Origin|cs260.click|Identifies the origin that caused the request. A host may only allow requests from specific origins.|
|Access-Control-Allow-Origin|https://cs260.click|Server response of what origins can make a request. This may include a wildcard.|
|Content-Length|368|The number of bytes contained in the response.|
|Cache-Control|public, max-age=604800|Tells the client how it can cache the response.|
|User-Agent|Mozilla/5.0 (Macintosh)|The client application making the request.|

- HTTP versions

|Year|Version|Features|
|---|---|---|
|1990|HTTP0.9|one line, no versions, only get|
|1996|HTTP1|get/post, header, status codes, content-type|
|1997|HTTP1.1|put/patch/delete/options, persistent connection|
|2015|HTTP2|multiplex, server push, binary representation|
|2022|HTTP3|QUIC for transport protocol, always encrypted|
## Webservice
- Webservices represents the "backend" of a web application
	- It handles all `fetch` requests, stores data, and run functions (`endpoints`/APIs)
		- Everything you don't want your end user seeing
- Webservices can also `fetch` data from other webservices that can be sent to the end user
### Fetch
- [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- The ability to make HTTP requests from JS is what progressed us from web 1.0 to web 2.0
	- Fetch is the successor to the XMLHttpRequest API that Microsoft developed
- Fetch is the preferred way of making HTTP requests from JS
	- It is part of the browser's JS runtime meaning the JS running in the browsers can make the request
- The basic fetch request takes a URL and returns a promise
	- The promise's `.then` takes the asynchronous callback when the url returns content
```JS
fetch('https://quote.cs260.click')
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```
- The content returned
```JSON
{
  author: 'Kyle Simpson',
  quote: "There's nothing more permanent than a temporary hack."
}
```
- Doing a POST request you can populate the optional parameters like the HTTP header like this
```js
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'test title',
    body: 'test body',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
  });
```

### Node Web Service
- JS, with NodeJS, lets us listen to ports on our computers and set up test servers to develop on
```js
const http = require('http');
const server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);
  res.end();
});

server.listen(8080, () => {
  console.log(`Web service listening on port 8080`);
});
```
- `const http = require('http');` uses NodeJS's built in `http` function to allow us to create a server
	- This function is called whenever an http request has been made
- `res.writeHead(200, { 'Content-Type': 'text/html' });` creates a header with a `200` or success response and declares the content type as text or html
- `res.write('<h1>Hello Node.js!...` writes the text html that gets sent to the browsers
- `server.listen(8080, () => ...` starts listening to port 8080 and when it receives a request (req) it responds (res) with the function we created with the `http.createServer(...)` function
- NodeJS and VSCode can be used to debug your server while it is running
	- You can also use Nodemon to create a better debugging experience

## Express
### Basics
- [MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)
- Express handles
	- Routing requests to service endpoints
	- Manipulating HTTP requests with JSON body content
	- Generating HTTP responses
	- and using `middleware` to add extra functionality
- To create an express app 
```shell
$ npm install express
```
```JS
const express = require('express');
const app = express();

app.listen(8080);
```
- The `app.listen()` function tells express which port to listen to for requests
	- This port doesn't have to be publicly available but can be used as a reverse proxy internally[[
- The `app` object allows you to take HTTP responses and crate middleware
- Endpoints can be implemented using routes
	- App uses REST api structure
	- Here the `/store/provo` is out route
	- Using a fetch request from your font end and attaching this route to the end of your domain connects you with the backend express app
```js
app.get('/store/provo', (req, res, next) => {
  res.send({name: 'provo'});
});
```
- Express has three parameters for their callback functions: `req` is the sent request,  `res` is the response from express, and  `next` to call the next function in line if there is more than one function for the same routing
	- Multiple functions can have the same routing. Express always calls the first listed function first
- Express supports path parameters by prefixing the path with a `:` 
	- The value after the colon acts like a variable that can be accessed through the req object
	- A user or front end can add any value after `/store/` and it will be send back to the user as a json object
```js
app.get('/store/:storeName', (req, res, next) => {
  res.send({name: req.params.storeName});
});
```
```shell
$ curl localhost:8080/store/orem
{"name":"orem"}
```
- Routes can also have wildcards or full regex expressions in them
```js
// Wildcard - matches /store/x and /star/y
app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

// Pure regular expression
app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));
```
### Middleware
- Middleware adds extra functionality to HTTP requests
- Express has built in middleware but you can add your own as well
- You can create middleware with this pattern
```js
function middlewareName(req, res, next)
```
- Call the next function after you are done with your middleware
- You can also use third party middleware like `cookie-parser`
```shell
$ npm install cookie-parser
```
```js
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});
```
- Middleware is also used for error handling using the `err` parameter
	- Add `err` to catch anything that might cause an error
```js
app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});
```
- Example of full Express app
```js
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Third party middleware - Cookies
app.use(cookieParser());

app.post('/cookie/:name/:value', (req, res, next) => {
  res.cookie(req.params.name, req.params.value);
  res.send({cookie: `${req.params.name}:${req.params.value}`});
});

app.get('/cookie', (req, res, next) => {
  res.send({cookie: req.cookies});
});

// Creating your own middleware - logging
app.use((req, res, next) => {
  console.log(req.originalUrl);
  next();
});

// Built in middleware - Static file hosting
app.use(express.static('public'));

// Routing middleware
app.get('/store/:storeName', (req, res) => {
  res.send({name: req.params.storeName});
});

app.put('/st*/:storeName', (req, res) => res.send({update: req.params.storeName}));

app.delete(/\/store\/(.+)/, (req, res) => res.send({delete: req.params[0]}));

// Error middleware
app.get('/error', (req, res, next) => {
  throw new Error('Trouble in river city');
});

app.use(function (err, req, res, next) {
  res.status(500).send({type: err.name, message: err.message});
});

// Listening to a network port
const port = 8080;
app.listen(port, function () {
  console.log(`Listening on port ${port}`);
});
```

## SOP and CORS
- [SOP MDN](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy)
- [CORS MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
- SOP or Single Origin Policy is a feature of JS to increase security when making API calls
	- SOP means that JS can call services that are part of the same domain but not from a different domain
- CORS or Cross Origin Resource Sharing allows serves to specify which origins outside of it's domain is allowed to access it's endpoints
	- When accessing a third party API they must have CORS enabled to allow you to access it
	- Third party serves must sent a `Access-Control-Allow-Origin` header in it's response or else the browser will reject it on a CORS error
		- A `*` in this header means that any origin can access this service

## Uploading Files
- If you want to upload files to your server there's a few steps you need to take
- Frontend
	- First you need to create an `<input type="file">` element in your html
		- You can also specify `accepted=".file .extention"` in your `<input>` element to only except certain file types
	- Next your front end js will select the `<input>` element and upload the file from the input
```js
	async function uploadFile(fileInput) {
  const file = fileInput.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('file', file);

    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (response.ok) {
      document.querySelector('#upload').src = `/file/${data.file}`;
    } else {
      alert(data.message);
    }
  }
}
```
- Backend
	- Your backend needs a way to handle file uploads
		- We use the `npm` package `multer`
		- `multer` handles HTTP request, enforces file size, and storing files in an `uploads` directory
		- The following code also provides `get` endpoints to serve files and  error handling
```js
const express = require('express');
const multer = require('multer');

const app = express();

app.use(express.static('public'));

const upload = multer({
  storage: multer.diskStorage({
    destination: 'uploads/',
    filename: (req, file, cb) => {
      const filetype = file.originalname.split('.').pop();
      const id = Math.round(Math.random() * 1e9);
      const filename = `${id}.${filetype}`;
      cb(null, filename);
    },
  }),
  limits: { fileSize: 64000 },
});

app.post('/upload', upload.single('file'), (req, res) => {
  if (req.file) {
    res.send({
      message: 'Uploaded succeeded',
      file: req.file.filename,
    });
  } else {
    res.status(400).send({ message: 'Upload failed' });
  }
});

app.get('/file/:filename', (req, res) => {
  res.sendFile(__dirname + `/uploads/${req.params.filename}`);
});

app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    res.status(413).send({ message: err.message });
  } else {
    res.status(500).send({ message: err.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```
- When constructing web apps, it's better to separate your web app server from your file storage
	- Creating a non-localized file storage allows you to scale storage separate from the app's demands
	- If you need multiple servers to serve your app, have a single file storage means all your servers will have the same files to serve
### AWS S3
- There are many different storage solutions but AWS' S3 is on of the most popular choices
- S3 provides 
	1. It has unlimited capacity
	2. You only pay for the storage that you use
	3. It is optimized for global access
	4. It keeps multiple redundant copies of every file
	5. You can version the files
	6. It is performant
	7. It supports metadata tags
	8. You can make your files publicly available directly from S3
	9. You can keep your files private and only accessible to your application
- You can learn how to use S3 with node.js on [AWS](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-nodejs.html)

## Data Services
- Data services allow servers to store user data persistently
	- Like user names and passwords
- Historically SQL databases were the main type but others have come around that have different use cases
	- Like better support for document, graph, JSON, time, sequence, and key-value pair data
- Here are some examples of services

|Service|Specialty|
|---|---|
|MySQL|Relational queries|
|Redis|Memory cached objects|
|ElasticSearch|Ranked free text|
|MongoDB|JSON objects|
|DynamoDB|Key value pairs|
|Neo4J|Graph based data|
|InfluxDB|Time series data|
### MongoDB
- MongoDB uses JSON files as it's main data type
- MongoDB is a non-relational database meaning there is no ridged structure, like tables of data, or strict rules to follow
	- You can add or delete data however you like and store different data types
- MongoDB also has js like syntax making queries visually similar to basic js
	- Example using a house database
```JS
// find all houses
db.house.find();

// find houses with two or more bedrooms
db.house.find({ beds: { $gte: 2 } });

// find houses that are available with less than three beds
db.house.find({ status: 'available', beds: { $lt: 3 } });

// find houses with either less than three beds or less than $1000 a night
db.house.find({ $or: [(beds: { $lt: 3 }), (price: { $lt: 1000 })] });

// find houses with the text 'modern' or 'beach' in the summary
db.house.find({ summary: /(modern|beach)/i });
```
- You can install MongoDB to your web app using npm
	- `npm install mongodb`
- You can either download MongoDB to your server or use a third party service like MongoDB Atlas to host your database
- Example of a backend calling MongoDB Atlas
```js
const { MongoClient } = require('mongodb');
const config = require('./dbConfig.json');

async function main() {
  // Connect to the database cluster
  const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
  const client = new MongoClient(url);
  const db = client.db('rental');
  const collection = db.collection('house');

  // Test that you can connect to the database
  (async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
  })().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
  });

  // Insert a document
  const house = {
    name: 'Beachfront views',
    summary: 'From your bedroom to the beach, no shoes required',
    property_type: 'Condo',
    beds: 1,
  };
  await collection.insertOne(house);

  // Query the documents
  const query = { property_type: 'Condo', beds: { $lt: 2 } };
  const options = {
    sort: { score: -1 },
    limit: 10,
  };

  const cursor = collection.find(query, options);
  const rentals = await cursor.toArray();
  rentals.forEach((i) => console.log(i));
}

main().catch(console.error);
```

## Authorization Service
- Authorization is used in web apps to decide if someone is allowed access your service or to what degree someone has access
	- i.e. admin vs regular user 
- The basic authorization structure involves a user to input a username and password
	- This gets verified against a database of users and passwords
	- If verified, the server sends back an authorization token that gets stored on the use's device for a length of time, many times as a cookie, then deleted
	- This token allows the web app to know if the user has been authenticated and doesn't have to be re-authenticated till the token expires
-  There are any authentication standards like [OAuth](https://en.wikipedia.org/wiki/OAuth), [SAML](https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language), and [OIDC](https://en.wikipedia.org/wiki/OpenID).
### Authorization Services
- Many modern apps use third parties to authenticate like Duo or gmail
- These types of services use `Single Sign One` (SSO) or Federated Login
	- SSO allows users to use one sign in for multiple apps
		- ie google sign in using non-google apps like github
	- Federated Login allows users to log into one serves and be automatically logged into multiple apps
		- ie logging into gmail and also being logged into google drive

## Account Creation and Login
- Creating accounts in your app you must have at least two endpoints for your users: create and authenticate/login
	- You can additionally have a `GetMe` endpoint that checks the user's cookies to see if they have an active auth token that can be used to login with
- Create's structure
	- Takes an email and password and returns an auth token and user id if the email isn't already being used
		- else returns 409 (conflict) status
- Login structure
	- Takes an email and password and returns an auth token and user id if the email is valid
		- else returns 401 (unauthorized) status code
- GetMe structure
	- Looks for an auth token in the user's cookies and if found logs the user in
		- If the token is no longer valid it returns 401 status
- Service endpoints with these structures, querying a database with usernames, passwords, and auth tokens give an app functionality to create auth states for users
### UUID
- You can create auth tokens many ways but node has a package `uuid` that handles the creation of these tokens
### Securing Passwords
- You must secure passwords
- It is a safety concern to save a password without encrypting it first
	- To do this we can hash the password and look up the password when the user tries to log in 
	- You can do this using the `bcrypt` package
```js
const bcrypt = require('bcrypt');

async function createUser(email, password) {
  // Hash the password before we insert it into the database
  const passwordHash = await bcrypt.hash(password, 10);

  const user = {
    email: email,
    password: passwordHash,
    token: uuid.v4(),
  };
  await collection.insertOne(user);

  return user;
}
```
### Passing Auth Coins
- We can pass auth coins using cookies
- One way to do this in js is using `cookie-parser` 
- When sharing these tokens you need to make it as secure as possible
	- We do this by using `httpOnly`, `secure`, and `sameSite`
		- `httpOnly` tells the browser to only allow JS running in the browser to read this cookie
		- `secure` requires https to be used when sending cookies back to the server
		- `sameSite` will only return cookies to the server that generated it
```js
const cookieParser = require('cookie-parser');

// Use the cookie parser middleware
app.use(cookieParser());

apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

function setAuthCookie(res, authToken) {
  res.cookie('token', authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}
```
### Login endpoint
- Our endpoint needs to take a username and password to login out user
- From out database we can look up the user and the hashed password
	- Using `bcrypt.compare` we can see if the given password matches the saved hashed password
		- Sends 401 if not able to verify
```js
app.post('/auth/login', async (req, res) => {
  const user = await getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
```
### GetMe endpoint
- We implement the GetMe endpoint in a similar way as login except we look for a cookie with the auth token in it
```js
app.get('/user/me', async (req, res) => {
  authToken = req.cookies['token'];
  const user = await collection.findOne({ token: authToken });
  if (user) {
    res.send({ email: user.email });
    return;
  }
  res.status(401).send({ msg: 'Unauthorized' });
});
```
