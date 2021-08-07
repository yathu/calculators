$("#how_net").click(function () {
$("#netaddr_how_wrap").hide();
    demonstration[0]="net";
$("#summary").html("Methods for Calculate Net / Subnet Address <br>");
$("#operation_demonstration").text("And");
$("#broad_demonstration").text("Last part of Subnet Address(to binary)");
    if (ipclass[0] == "C") {
        $("#indicate_var").text("And");

        $ip_net_1 = parseInt($("#ip_4").val()).toString(2);
        $ip_net_1_add = "";

        $sub_net_1 = parseInt($("#sub_4").val()).toString(2);
        $sub_net_1_add = "";

        if ($ip_net_1.length != 8) {
            for ($i = 0; $i < 8 - ($ip_net_1.length); $i++)
                $ip_net_1_add += 0;

            $ip_net_1 = $ip_net_1_add + $ip_net_1;
        }

        if ($sub_net_1.length != 8) {
            for ($i = 0; $i < 8 - ($sub_net_1.length); $i++)
                $sub_net_1_add += 0;

            $sub_net_1 = $sub_net_1_add + $sub_net_1;
        }

        $ans = ($("#ip_4").val() & $("#sub_4").val());
        $ans_net_1 = parseInt($ans).toString(2);

        $("#netaddr_how_wrap").show();
        // Anim_how("#demo_c_wrapper");
        demo_net_c.reset().play(); // play arrow
        demo_indicate_c.reset().play(); // play indicate
        $("#ip_c_bin").val($ip_net_1);
        Anim_how("#ip_c_bin");
        $("#sub_c_bin").val($sub_net_1);
        Anim_how("#sub_c_bin");
        $("#ans_c_bin").val($ans_net_1);
        Anim_how("#ans_c_bin");
        Anim_how_note("#demonstration_txt");


        Anim_how_hilight("#ip_4");
        Anim_how_hilight("#sub_4");
    }

});

$("#how_bcast").click(function () {
    $("#netaddr_how_wrap").hide();
    demonstration[0]="bcast";
       $("#brod_special").show();
$("#summary").html("Methods for Calculate Broadcast Address <br>");
    $("#broad_demonstration").text("Last part of Subnet Address(to binary) And Convert it to one's complement ");
$("#operation_demonstration").text("OR");
    if (ipclass[0] == "C") {
        $("#indicate_var").text("OR");
 $ip_net_1 = parseInt($("#ip_4").val()).toString(2);
        $ip_net_1_add = "";

      //  $sub_net_1 = parseInt($("#sub_4").val()).toString(2);
       // $sub_net_1_add = "";

        if ($ip_net_1.length != 8) {
            for ($i = 0; $i < 8 - ($ip_net_1.length); $i++)
                $ip_net_1_add += 0;

            $ip_net_1 = $ip_net_1_add + $ip_net_1;
        }
//for demonstration
      /*  if ($sub_net_1.length != 8) {
            for ($i = 0; $i < 8 - ($sub_net_1.length); $i++)
                $sub_net_1_add += 0;

            $sub_net_1 = $sub_net_1_add + $sub_net_1;
        }*/
$sub_net_1=$inverse_subnet;
        $ans = ($("#ip_4").val() | parseInt($inverse_subnet, 2));

        $ans_net_1 = parseInt($ans).toString(2);

        $("#netaddr_how_wrap").show();
        // Anim_how("#demo_c_wrapper");
        demo_net_c.reset().play(); // play arrow
        demo_indicate_c.reset().play(); // play indicate

        $("#ip_c_bin").val($ip_net_1);
        Anim_how("#ip_c_bin");
        $("#sub_c_bin").val($inverse_subnet);
        Anim_how("#sub_c_bin");
        $("#ans_c_bin").val($ans_net_1);
        Anim_how("#ans_c_bin");
        Anim_how_note("#demonstration_txt");


        Anim_how_hilight("#ip_4");
        Anim_how_hilight("#sub_4");

    }

});


$("#how_nohost").click(function(){
    $("#netaddr_how_wrap").hide();
      $sub_net_d1 = parseInt($("#sub_4").val()).toString(2);
                $sub_net_d1_add = "";
                if ($sub_net_d1.length != 8) {
                    for ($i = 0; $i < 8 - ($sub_net_d1.length); $i++)
                        $sub_net_d1_add += 0;

                    $sub_net_d1 = $sub_net_d1_add + $sub_net_d1;
                }
    $no_host_d_text="<div id='exit' onclick='exit()'>X</div> This is Class <span style='color:red;'>C</span> IP address<br>No of Host calculate with <span style='color:red;'> Last part of Subnet </span> Number <span style='color:red;'> binary Value(zeros 0)</span><br>Eg:- Binary of 248 - 11111000(3 - zeros)<br>Inthis<span style='color:red;'> "+($("#sub_4").val())+"</span> Convert to Binary =<span style='color:red;'> " +$sub_net_d1+" </span><br> <span style='color:red;'>Count zero</span> In above Binary =<span style='color:red;'> "+$d_no_host+"</span><br>No of host = <span style='color:red;'> 2<sup>No of zero</sup> - 2</span><br>No of host = <span style='color:red;'>2<sup>"+$d_no_host+"</sup> - 2 = "+$no_hosts+"</span>";
          $("#demonstrate_popup").html($no_host_d_text);
            $("#demonstrate_popup").show();
            demonstrate_entry("#demonstrate_popup");
          /*  setTimeout(function () {
                $("#demonstrate_popup").fadeOut(500);
            }, 10000);
*/

})
$("#how_nosubnet").click(function(){
    $("#netaddr_how_wrap").hide();
 $sub_net_d1 = parseInt($("#sub_4").val()).toString(2);
                $sub_net_d1_add = "";
                if ($sub_net_d1.length != 8) {
                    for ($i = 0; $i < 8 - ($sub_net_d1.length); $i++)
                        $sub_net_d1_add += 0;

                    $sub_net_d1 = $sub_net_d1_add + $sub_net_d1;
                }
    $no_host_d_text=" <div id='exit' onclick='exit()'>X</div> This is Class <span style='color:red;'>C</span> IP address<br>No of Subnet calculate with <span style='color:red;'>Last part of Subnet Number  binary Value(One 1)</span><br>Eg:- Binary of 248 - 11111000(5 ones)<br>Inthis<span style='color:red;'> "+($("#sub_4").val())+"</span> Convert to Binary =<span style='color:red;'> " +$sub_net_d1+" </span><br> <span style='color:red;'>Count one</span> In above Binary =<span style='color:red;'> "+(8-$d_no_host)+"</span><br>No of host = <span style='color:red;'> 2<sup>No of zero</sup> - 2</span><br>No of host = <span style='color:red;'>2<sup>"+(8-$d_no_host)+"</sup> - 2 = "+$no_subnets+"</span>";
          $("#demonstrate_popup").html($no_host_d_text);
            $("#demonstrate_popup").show();
            demonstrate_entry("#demonstrate_popup");
        /*    setTimeout(function () {
                $("#demonstrate_popup").fadeOut(500);
            }, 10000);*/

})


$("#how_cidr").click(function(){
    $("#netaddr_how_wrap").hide();
     $sub_net_d1 = parseInt($("#sub_4").val()).toString(2);
                $sub_net_d1_add = "";
                if ($sub_net_d1.length != 8) {
                    for ($i = 0; $i < 8 - ($sub_net_d1.length); $i++)
                        $sub_net_d1_add += 0;

                    $sub_net_d1 = $sub_net_d1_add + $sub_net_d1;
                }

$cidr_text="<div id='exit' onclick='exit()'>X</div> This is Class <span style='color:red;'>C</span> IP address<br>Must  <span style='color:red;'>convert all subnet Parts</span> to binary<br> <span style='color:red;'>Count</span> the total No of (1)<br>  <span style='color:red;'>CIDR</span>= Net Interface address <span style='color:red;'>/</span> count.<br> <span style='color:red;'>"+$("#sub_1").val()+"</span>. <span style='color:red;'>"+$("#sub_2").val()+"</span>.<span style='color:red;'>"+$("#sub_3").val()+"</span>.<span style='color:red;'>"+$("#sub_4").val()+"</span>  <br>Binary of this  subnet <br><span style='color:red;'>11111111</span>.<span style='color:red;'>11111111</span>.<span style='color:red;'>11111111</span>.<span style='color:red;'>"+$sub_net_d1+"</span><br>count =<span style='color:red;'> "+$d_cidr+"</span><br> CIDR is <span style='color:red;'>"+$cidr+" <br>";

 $("#demonstrate_popup").html($cidr_text);
            $("#demonstrate_popup").show();
            demonstrate_entry("#demonstrate_popup");
})

$("#how_hrange").click(function(){
$hrange_text="<div id='exit' onclick='exit()'>X</div> <span style='color:red;'>Add one(+1) </span> to Net address - <span style='color:red;'>Minus(-1)</span> to your Broadcast address<br>This  used to get Host Range.";
 $("#demonstrate_popup").html($hrange_text);
            $("#demonstrate_popup").show();
            demonstrate_entry("#demonstrate_popup");
})


