var ip_details = {
    A: " 0 - 127 ",
    B: " 128 - 191 ",
    C: " 192 - 223 ",
    D: " 224 - 239 ",
    E: " 240 - 255 "
};

$("#demonstration_txt span").click(function () {
    if (ipclass[0] == "C") {
        $("#demonstration_txt span").eq(0).click(function () {
            $info = "Range of Class <span style='color:red;'>" + $(this).text() + "</span> address is";

            $("#demonstrate_popup").html($info + "<span style='color:red;'>" + (ip_details.C) + "</span>");
            $("#demonstrate_popup").show();
            demonstrate_entry("#demonstrate_popup");
            setTimeout(function () {

                $("#demonstrate_popup").fadeOut(500);
            }, 3000);
            //$("").

        })
        $("#demonstration_txt span").eq(1).click(function () {
            demo_net_c.reset().play(); // play arrow
            demo_indicate_c.reset().play(); // play indicate
            $("#ip_c_bin").val($ip_net_1);
            Anim_how("#ip_c_bin");
            $("#sub_c_bin").val($sub_net_1);
            Anim_how("#sub_c_bin");
            $("#ans_c_bin").val($ans_net_1);
            Anim_how("#ans_c_bin");

        })
        $("#demonstration_txt span").eq(2).click(function () {
            $("#ip_4").addClass("hilight_1");
            Anim_how_hilight("#ip_4");
            setTimeout(function () {

                $("#ip_4").removeClass("hilight_1");
            }, 1500);

        })
        $("#demonstration_txt span").eq(3).click(function () {

            if (demonstration[0] == "bcast") {


                $sub_net_d1 = parseInt($("#sub_4").val()).toString(2);
                $sub_net_d1_add = "";
                if ($sub_net_d1.length != 8) {
                    for ($i = 0; $i < 8 - ($sub_net_d1.length); $i++)
                        $sub_net_d1_add += 0;

                    $sub_net_d1 = $sub_net_d1_add + $sub_net_d1;
                }
                $("#demonstrate_popup").html("Binary of <span style='color:red;'> " + " " + ($("#sub_4").val()) + "</span> is" + " " + ($sub_net_d1) + "</span> <br>" + "one's complement of <span style='color:red;'>" + " " + ($("#sub_4").val()) + " " + "</span>is <span style='color:red;'>" + "  " + $inverse_subnet + "</span>");
                $("#demonstrate_popup").show();
                demonstrate_entry("#demonstrate_popup");
                setTimeout(function () {

                    $("#demonstrate_popup").fadeOut(500);
                }, 5000);
                //$("").


            }
            $("#sub_4").addClass("hilight_2");
            Anim_how_hilight("#sub_4");
            setTimeout(function () {

                $("#sub_4").removeClass("hilight_2");
            }, 1500);

        })
        $("#demonstration_txt span").eq(4).click(function () {

            $("#demonstrate_popup").html("Binary of <span style='color:red;'>" + $ans_net_1 + "</span> is <span style='color:red;'>" + $ans + "</span>");
            $("#demonstrate_popup").show();
            demonstrate_entry("#demonstrate_popup");
            setTimeout(function () {

                $("#demonstrate_popup").fadeOut(500);
            }, 3000);

        })

        $("#demonstration_txt span").eq(5).click(function () {
            $("#ip_1").addClass("hilight_1");
            $("#ip_2").addClass("hilight_1");
            $("#ip_3").addClass("hilight_1");
            setTimeout(function () {

                $("#ip_1").removeClass("hilight_1");
                $("#ip_2").removeClass("hilight_1");
                $("#ip_3").removeClass("hilight_1");
            }, 1500);


        })

        $("#demonstration_txt span").eq(6).click(function () {
                if (demonstration[0] == "net") {
                    $("#net_address").addClass("hilight_1");
                    setTimeout(function () {
                        $("#net_address").removeClass("hilight_1");

                    }, 1500);


        } else if (demonstration[0] == "bcast") {
            $("#broadcast_address").addClass("hilight_1");
            setTimeout(function () {
                $("#broadcast_address").removeClass("hilight_1");

            }, 1500);
        }
        });


}
})
