<template>
  <div>
    <navigation :navigation="navigation" :site-info="siteInfo"></navigation>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <ol class="breadcrumb">
            <li><a href="/">Home</a></li>
            <li v-for="(breadcrumb, index) in category.breadcrumb" :key="index">
              <a :href="'/' + breadcrumb.type + '/' + breadcrumb._id + '/'">{{breadcrumb.name}}</a>
            </li>
            <li class="active">{{category.name}}</li>
          </ol>
          <div class="row">
            <div class="col-md-12">
              <div class="list-group list-group-less">
                <a class="list-group-item text-overflow"
                   v-for="(article, index) in articles"
                   :href="'/article/' + article"
                   :key="index">
                  <div class="card-info">
                    <section class="title">
                      {{article.replace(new RegExp('_','gm'), ' ').replace('.html', '')}}
                    </section>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <global-footer :site-info="siteInfo"></global-footer>
  </div>
</template>

<script>
  import Navigation from '~/components/Navigation.vue'
  import axios from 'axios'
  import GlobalFooter from '~/components/GlobalFooter'
  import GamePanel from '~/components/GamePanel'

  export default {
    components: {
      GlobalFooter,
      Navigation,
      GamePanel
    },
    data () {
      return {
        category: {
          name: '',
          breadcrumb: []
        },
        siteInfo: {
          codeFooter: ''
        },
        navigation: [],
        lists: [],
        articles: [
          'The_streets_of_London_murder_strategy.html',
          'Originally_I_is_NPC_game_strategy.html',
          'My_world_is_placed_for_mine_strategy.html',
          'My_world_placed_large_visitors.html',
          'Dayaoshan_medical_female_intro_strategy.html',
          'Small_town_story_game_strategy.html',
          'Desert_travel_2_game_strategy_in_detail.html',
          'Alraune_full_version_strategy.html',
          'The_university_four_years_KeJingYang_strategy.html',
          'The_north_wind_game_strategy.html',
          'The_north_has_the_wind_the_emperor_line_strategy.html',
          'Keep_only_pet_ball_game_strategy.html',
          'Through_the_qing_world_of_beishan_article_strategy.html',
          'Through_the_gentle_dip_of_the_world_god_save_the_end_line_strategy.html',
          'Through_the_qing_world_strategy_books.html',
          'Through_the_soft_qing_world_pig_ye_how_the_undead_strategy.html',
          'Seven_childe_strategy_through_the_gentle_dip_of_the_world.html',
          'The_chamber_of_secrets_escape_customs_clearance_strategy_of_B_room.html',
          'Fairy_magic_of_comprehensive_strategy.html',
          'In_the_lotus_BingDi_kai_yuan_Yang_line_strategy.html',
          'In_the_lotus_BingDi_opened_the_chamber_of_secrets_escape_by_strategy.html',
          'Endless_fireworks_game_strategy.html',
          'The_castle_of_the_month_strategy_in_detail.html',
          'Cube_of_bright_star_game_skills_strategy.html',
          'Cube_the_bright_star_of_jung_heng_line_strategy.html',
          'Smile_dream_customs_clearance_secret_strategy.html',
          'Smile_dream_all_sorts_of_good_strategy.html',
          'Dream_the_author_collected_tips_strategy.html',
          'The_star_dream_for_regional_strategy.html',
          'The_star_dream_He_Lian_line_strategy.html',
          'The_star_dream_line_strategy.html',
          'The_star_dream_love_regional_strategy_about.html',
          'Longmen_game_strategy.html',
          'Ten_years_the_wind_Chinese_theater_strategy.html',
          'Ten_years_the_wind_full_strategy.html',
          'Ten_years_is_considerably_the_complete_the_wind.html',
          'Thyme_is_cool_huan_fu_writing_strategy.html',
          'Thyme_is_cool_huan_fu_various_graphic_strategy.html',
          'Thyme_is_cool_huan_fu_various_end_CG_figure_strategy.html',
          'Steal_heart_cold_medicine_master_the_Dragon_Boat_Festival_special_article_strategy.html',
          'Sunset_steal_heart_cold_d_fairy_prince_strategy.html',
          'Steal_heart_cold_medicine_from_a_regression_line_strategy.html',
          'Steal_heart_cold_d_fairy_ryukyu_and_her_prince_strategy.html',
          'Steal_heart_cold_medicine_phegda_strategy.html',
          'Steal_heart_cold_d_fairy_hin_strategy.html',
          'White_pony_plot_strategy.html',
          'Bear_children_counter_attack_strategies.html',
          'Becomes_the_love_theater_strategy.html',
          'Becomes_the_love_game_strategy.html',
          'If_spilt_tea_liquor_and_the_little_prince_revenge_strategy.html',
          'If_spilt_tea_liquor_YanZhen_strategy.html',
          'If_spilt_tea_liquor_phoenix_strategy.html',
          'If_spilt_tea_wen_xiang_wind_child_benefits_strategy.html',
          'In_Tang_Zilin_strategy.html',
          'In_Ding_Jin_tomahawk_and_Shen_Peihong_strategy.html',
          'In_xia_Yang_strategy.html',
          'In_what_and_strategy.html',
          'In_Lin_Xiran_strategy.html',
          'In_liang_MingYing_strategy.html',
          'RenWu_general_strategy.html',
          'XianXia_wind_line_strategy.html',
          'XianXia_night_susu_strategy_small_secret.html',
          'XianXia_night_Chen_su_line_strategy.html',
          'Counter_attack_shining_star_way_lower_Sue_orange_after_advertising_strategy.html',
          'Counter_attack_shining_star_way_lower_password_strategy.html',
          'Counter_attack_shining_star_way_lower_President_line_strategy.html',
          'Family_history_of_the_fourth_generation_of_QuChenXu_strategy.html',
          'A_family_history_of_the_third_generation_QuChenLong_strategy.html',
          'A_family_history_of_the_third_generation_QuChenLin_strategy.html',
          'A_family_history_of_the_third_generation_QuChen_post_strategy.html',
          'Family_history_of_the_second_generation_QuChen_flow_strategy.html',
          'Family_history_of_the_second_generation_QuChen_diffuse_guide.html',
          'Family_history_of_the_second_generation_QuChen_wave_guide.html',
          'A_family_history_of_seven_finale_strategy.html',
          'A_family_history_of_small_book_of_strategy.html',
          'Lotus_set_pieces_May_123_strategy_step_by_step.html',
          'Lotus_may_strategy_step_by_step.html',
          'The_lotus_set_pieces_hubei_qi_and_five_brother_step_by_step_guide.html',
          'The_line_three_brother_born_lotus_set_pieces_change_strategy_step_by_step.html',
          'Step_by_step_born_lotus_set_pieces_may_total_strategy.html',
          'O_step_by_step_born_lotus_carrying_three_gothic_princess_line_strategy.html',
          'Step_by_step_born_lotus_carrying_three_brother_xian_princess_line_strategy.html',
          'Step_by_step_born_lotus_seduce_a_second_line_strategy_may_queen.html',
          'Step_by_step_born_lotus_seduce_a_second_brother_xian_princess_line_strategy.html',
          'Lotus_palace_before_each_strategy_step_by_step.html',
          'Our_memories_Zhang_Xiaochang_line_strategy.html',
          'Overnight_success_strategy.html',
          'Film_arena_tour_customs_clearance_strategy.html',
          'Latent_red_way_of_strategy.html',
          'Flowers_full_strategy.html',
          'Click_on_a_hero_customs_clearance_strategy.html',
          'Click_on_a_hero_skill_name_translation_and_key_localization_strategy.html',
          'Click_on_a_hero_new_strategy.html',
          'Click_on_a_hero_achievement_unlocked_condition_localization_strategy.html',
          'The_chamber_of_secrets_escape_strategy_of_sky_blue_room.html',
          'Film_journey_total_strategy.html',
          'Film_arena_tour_JiPeng_strategy.html',
          'Film_arena_tour_Liu_Han_strategy.html',
          'Film_arena_tour_TongXiaoWei_strategy.html',
          'The_emperor_together_develop_plan_strategy_big.html',
          'Ultimate_invincible_version_2_Chinese_customs_clearance_strategy_war_hero.html',
          'How_can_be_comparable_to_ZuiWo_filled_with_determination_strategy.html',
          'Only_this_2_game_strategy.html',
          'The_emperor_sin_strategy_in_detail.html',
          'Can_be_comparable_to_ZuiWo_four_prince_strategy.html',
          'Can_be_comparable_to_ZuiWo_prince_of_strategy.html',
          'A_god_of_death_tried_2_invincible_version_of_the_game_strategy.html',
          'Jin_yong_QunXiaChuan_3_wulin_supreme_title_and_united_strategy.html',
          'Jin_yong_QunXiaChuan_3_wulin_supreme_special_task_strategy.html',
          'Jin_yong_QunXiaChuan_3_strange_through_eight_veins_of_wulin_ultimate_game_strategy.html',
          'Can_be_comparable_to_ZuiWo_five_prince_strategy.html',
          'Can_be_comparable_to_ZuiWo_six_male_character_analysis_strategy_of_the_Lord.html',
          'Jin_yong_QunXiaChuan_3_strange_through_eight_veins_fighting_skill_of_wulin_supreme_strategy.html',
          'Jin_yong_QunXiaChuan_3_strange_through_eight_veins_of_wulin_supreme_strategy.html',
          'Pit_dad_fraudster_2_revision_strategies.html',
          'Pit_dad_fraudster_Chinese_version_of_the_game_strategy.html',
          'Can_be_comparable_to_prince_ZuiWo_Ann_to_big_brother_jealous_strategy.html',
          'Hero_says_invincible_version_of_altar_giants_family_secret_strategy_game.html',
          'Hero_says_invincible_version_of_altar_giants_family_items_strategy.html',
          'Hero_says_invincible_version_of_altar_giants_family_strategies_and_skills.html',
          'Hero_says_invincible_version_of_altar_giants_family_game_strategy.html',
          'Can_be_comparable_to_ZuiWo_timelines_strategy.html',
          'Out_of_the_red_house_pass_strategy.html',
          'New_new_found_2_ultimate_tower_Armageddon_invincible_version_test_strategy.html',
          'New_new_found_ultimate_invincible_version_2_underground_tower_and_test_strategy.html',
          'The_new_found_ultimate_invincible_version_2_showdown_Lord_guides.html',
          'New_found_ultimate_invincible_version_2_monster_guide.html',
          'Four_sacred_animals_pass_the_throne_hidden_items_of_time_and_space_of_The_Three_Kingdoms_of_shu_strategy.html',
          'The_chamber_of_secrets_escape_of_white_room_full_game_strategy.html',
          'With_fauci_margin_of_previous_game_strategy.html',
          'The_balloon_tower_5_invincible_edition_game_props_strategy.html',
          'The_balloon_tower_5_invincible_version_of_map_building_strategy.html',
          'The_balloon_invincible_version_5_defensive_towers_upgrade_tutorial.html',
          'The_balloon_tower_5_invincible_version_upgrade_strategy_quickly.html',
          'Chrono_warrior_invincible_version_2_Chinese_flight_strategy.html',
          'Chrono_warrior_invincible_version_2_Chinese_argot_visitors.html',
          'Chrono_invincible_warrior_2_Chinese_version_of_the_game_strategy.html',
          'Through_the_marriage_of_brothel_strategy_prince.html',
          'Through_the_marriage_of_family_strategy.html',
          'Through_the_marriage_of_brothel_strategy_WeiChi.html',
          'Through_the_marriage_of_brothel_flow_strategy.html',
          'Ancient_artifact_2_invincible_version_games_strategy.html',
          'Gold_miners_in_Chinese_customs_clearance_strategy.html',
          'Jin_yong_QunXiaChuan_3_invincible_version_of_wulin_sovereign_tomb_raiders.html',
          'The_royal_guardsmen_front_hero_full_open_invincible_version_14_strategy.html',
          'The_royal_guardsmen_front_hero_full_open_invincible_version_11_strategy.html',
          'Chinese_version_of_the_game_a_little_playful_and_shower_strategy.html',
          'Jin_yong_QunXiaChuan_3_huashan_sent_the_answer_strategy.html',
          'Get_out_of_the_dream_villa_clues_to_release_strategy.html',
          'Jin_yong_QunXiaChuan_3_secrets.html',
          'Super_three_ultimate_invincible_version_5_game_strategy.html',
        ]
      }
    },
    methods: {},
    head: {
      script: [
        {
          innerHTML: `(adsbygoogle = window.adsbygoogle || []).push({
  google_ad_client: 'ca-pub-3164628254889272',
  enable_page_level_ads: true
})`, type: 'text/javascript'
        }
      ],
      __dangerouslyDisableSanitizers: ['script']
    },
    async asyncData ({params}) {
      try {
        let {data} = await axios.get('http://123.206.65.112/page?id=' + params.id, {})

        return {
          category: {...data.category},
          siteInfo: data.siteInfo,
          navigation: data.navigation,
          lists: data.lists
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>

<style scoped>

</style>
