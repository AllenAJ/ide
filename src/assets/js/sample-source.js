/**
 * Created by abhishek on 15/06/17.
 */
'use strict';

/**
 * Created by umair on 27/12/16.
 */

/* const c_sample =
   '#include <stdio.h>\n' +
   'int main() {\n' +
   '    printf("Hello World!");\n' +
   '}\n';*/
//Commenting this out because it supports JudgeAPI instead  of Judge2


const cpp_sample =
  '#include <iostream>\n' +
  'using namespace std;\n' +
  'int main() {\n' +
  '    cout<<"Hello World!";\n' +
  '}\n';


const cpp14_sample =
  '#include <iostream>\n' +
  '#include <cstdio>\n' +
  'using namespace std;\n' +
  'int main() {\n' +
      'printf("Hello, World!");\n' +
      'return 0;\n' +
  '}\n';//Basic C++ Dependensies 

const csharp_sample =
  'using System;\n' +
  'namespace HelloWorld\n' +
  '{\n' +
  '    class Hello\n' +
  '    {\n' +
  '        static void Main()\n' +
  '        {\n' +
  '            Console.WriteLine("Hello World!");\n' +
  '        }\n' +
  '    }\n' +
  '}\n';

const java_sample =
  'public class Main {\n' +
  '    public static void main(String args[]) {\n' +
  '        System.out.println("Hello World!");\n' +
  '    }\n' +
  '}';

const py2_sample =
  'print("Hello World!")';

//const py3_sample =
//  'print("Hello World!")';

const js_sample =
  `/* 
    Use INPUT variable to get stdin.
    Try console.log(INPUT);
*/
    console.log('Hello World');`;

//const ruby_sample = 'puts "Hello World!";'

const lang_samples = {
//  'C': c_sample,
'C++14': cpp14_sample,
  'C#': csharp_sample,
  'Java7': java_sample,
  'Java8': java_sample,
  'Python': py2_sample,
 // 'Python3': py3_sample,
  // 'Javascript': js_sample,
  'NodeJs6': js_sample,
  'NodeJs8': js_sample,
  // 'Ruby': ruby_sample
};

export default lang_samples

