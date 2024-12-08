---
title: 'Weekly learning review - php basics'
date: 2024-12-08 16:45:00
---

## This week's review:

- Just spent some time on php (have started to pick it up to build endpoints, understanding the repository-service-controller pattern and learning how to write integration tests).
- Some developers were complaining how they hated PHP, but it's likely the mental model of how they think PHP works vs how it actually works differs, which causes frustration (same with JavaScript and Typescript - we have been guilty of blaming the language for far too long and often).
- It goes to show how much developer experience could enhance and make happier engineers, but also increase efficiency and productivity. Running a test that takes 30 seconds to run locally is a pretty awful feedback loop. It makes you wonder if this is why testing is an afterthought in that developer environment, when it should be mandatory and an absolute requirement. But if it's painful to write and run, of course we'd cut corners.
- Gave Maximiliano Firtman's PHP Fundamentals course a go, and was a pretty easy introduction to PHP. It also explained why PHP is the way it is.
  - _Note: Did try about 3 years ago to learn PHP from laracasts, but couldn't get into it. It was a bit of a drag watching 10 hours... only for nothing to stick. Have realised things only stick for me if I actually build and write code._
- Will most likely leave this as a cheatsheet for PHP basics, and continue to learn parts of it at work, while exploring other things on the side.

## Review:

> "Just write everything in JavaScript and slap on a dollar sign at the start of every variable" - some developer on my team.

- it'll be interesting how far LLMs / code generators could get us by translating from 1 language to another (another musing for another day).
- Why learn it? Lot of websites are still powered by PHP today (a chunk are wordpress websites) and legacy applications either as a server side language. It can be used for scripting, powering backends, or building desktop applications.
- When created, it was not intended to be a programming language - rather it was meant to be scripts to help out with web design and build web pages easily (which explains why some rules are inconsistent in some parts of the language)
- `$cookie` - how to define a variable named cookie
- variables are case sensitive
- double dollar sign variables are known as variable variables, which as not used very often (as it causes confusion) - 1 variable is used as the name of another variable. `$$`
- booleans are case-insensitive (`true` is the same as `True` is the same as `TruE`)
- To concatenate strings, use `.` rather than `+` (e.g. `"hello" . "world"`)
- We can define arrays, and keys with array values. We can use square bracket notation to access values inside the array.

```
$characters = ["Harry Potter", "Aragon", "Wednesday Addams"];

$charactersWithAbbreviations = [
    "HP" => "Harry Potter",
    "A" => "Aragon",
    "WA" => "Wednesday Addams"
];

$harryPotter = $charactersWithAbbreviations["HP"]; // Harry Potter
```

- To access objects, we use the `->` thin arrow notation

```
class Character {
    public string $title;
    public string $name;
    public string $abbreviation;

    function __construct($name, $abbreviation, $title) {
        $this->title = $title;
        $this->name = $name;
        $this->abbreviation = $abbreviation;
    }

    function getTitle() {
        return $this->title;
    }
}

$aragon = new Character("Aragon", "A", "Lord Of The Rings");

echo $aragon->name; // Aragon
echo $aragon->getTitle(); // Lord Of The Rings
```

- To define a for loop, use `foreach` notation

```
foreach($characters as $i => $character) {
    echo "$character is at $i index";
}
```

- Has built-in session management
- There is a differentiation between double quotes and single quotes - double quotes allows for interpolation (meaning you can reference variables in your strings and concatenate them together like template variables in JS), while single quotes do not.

```
$world = "World"
echo "Hello $world";
```

- To run a simple server, run `php -S localhost:port-number`
- With PHP classes, you can define constructors and destructors (destructors are executed when garbage collector is about to dispose or destroy the class - rarely used)
- To define a constructor use `function __construct()`
- To define a function use `function` keyword
- There is no module importing and exporting system in php - to reference a class from a different file, use `include / include_once` or `require / require_once`
- To autoload classes (if you write lots of classes you don't want to keep having to add it to a single `includes.php` file every time you need to add a class), we can use `spl_autoload_register`:

```
spl_autoload_register(function($class_name) {
    include_once("classes/$class_name.php");
});
```

- We can use `echo` or `var_dump` for quick debugging (if html is rendered to the screen and php is generating content on the web page - best to use a debugger if we are trying to debug a backend endpoint)
- Uses server side rendering
- Use `try / catch` to catch errors and exceptions, and be specific about which errors are being caught
- We can use `ini_set` and `error_reporting` to display all errors when running our code in development environments for easier debugging

```
ini_set("display_errors", 1)
ini_set("display_startup_errors", 1)
error_reporting(1)
```

## References

- Maximiliano Firtman's [PHP Basics](https://frontendmasters.com/courses/php/) course on FrontEnd Masters
- [error_reporting](https://www.php.net/manual/en/function.error-reporting.php) - php.net
- [ini_setting](https://www.php.net/manual/en/function.ini-set.php) - php.net
- [objects](https://www.php.net/manual/en/language.types.object.php) - php.net
