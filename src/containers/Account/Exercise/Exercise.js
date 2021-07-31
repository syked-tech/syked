import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as ROUTES from 'common/constants';

const exercises = [
  {
    id: 39,
    title: 'Thinking Versus Sensing',
    description:
      '<p>Thinking versus sensing is a quick exercise to help you to notice the difference between your thoughts and ability to think, and your senses and ability to feel. Our intention during this<br />\nexercise is to really notice the difference between how we &lsquo;think about&rsquo; something versus how we &lsquo;sense&rsquo; our bodies. Remember that with mindfulness we always try to bring an<br />\nattitude of interest and curiosity without too much analyzing or judging. So let&rsquo;s have a go.</p>\n',
    type: 'audio',
    file: 'IMG_2021414_85617.mp3',
    thum_img: 'IMG_2021414_8569.jpg',
    created_at: '2021-04-14T08:56:24.000Z',
  },
  {
    id: 38,
    title: 'Sensory Grounding Using Smells',
    description:
      '<p>The sense of smell is a fantastic way to ground yourself in the present moment. Smell is one of our most primitive and powerful senses. The part of the brain that processes smel - called the olfactory bulb - is directly connected to the part of the brain that processes danger and emotion &ndash; called the amygdala. This means that smell is a very quick way of<br />\naffecting our emotional responses.</p>\n\n<p>Different smells can serve different purposes. You may have already tried using a soothing smell to help to relax and calm yourself. If you are having a flashback though, and need to<br />\ncome back to the present moment, then it is helpful to use a strong smell &ndash; for this purpose it does not even have to be a smell you like. To be useful, you will need to have the smell<br />\nwith you wherever you go.</p>\n\n<p>The first step to grounding yourself with smell will be to pick a grounding smell. For this sensory grounding exercise we want to use a strong smell to bring you back to the present<br />\nmoment. A great source of smells are the small bottles of essential oil which you can buy from a chemist or pharmacist. Other common sources of smells are natural herbs and<br />\nspices, or perfumes. The strongest smells tend to be traditional smelling salts that contain ammonia. Other strong smells include eucalyptus, tea-tree, or mint.</p>\n\n<p>The instructions for this exercise will start in a moment. Pause this recording and go andfind a grounding smell now.</p>\n',
    type: 'audio',
    file: 'IMG_2021414_84636.mp3',
    thum_img: 'IMG_2021414_84633.jpg',
    created_at: '2021-04-14T08:46:40.000Z',
  },
  {
    id: 37,
    title: 'Progressive Muscle Relaxation',
    description:
      '<p>When we are feeling threatened or scared our body goes through a number of changes in an effort to keep us safe. The fight-or-flight response is an automatic bodily reaction which is designed to get our body ready to cope with danger.</p>\n\n<p>One of these changes is that our muscles tense to prepare for action. If there is a real danger this means that we are more ready to run away from a danger at a moment&rsquo;s notice or, if we can&rsquo;t run, then we are ready to fight. This is called the fight or flight reaction.</p>\n\n<p>Unfortunately what we know is that when we have PTSD our fight-or-flight reaction is too sensitive - it often goes off even when there is no danger. Progressive muscle relaxation is a great way to correct this unhelpful reaction of the fight or- flight response. Deliberately relaxing the muscles in the body signals to the mind that you are safe, that there is no danger, and that you are safe to relax once again.</p>\n',
    type: 'audio',
    file: 'IMG_2021414_8409.mp3',
    thum_img: 'IMG_2021414_8407.jpg',
    created_at: '2021-04-14T08:40:25.000Z',
  },
  {
    id: 36,
    title: 'Mindfulness of Breath',
    description:
      '<p>Different things can happen when we practice mindfulness for longer periods. We might notice more sensations, such as boredom or mind wandering, and that&rsquo;s completely normal<br />\nand OK. In fact, that&rsquo;s a part of why we&rsquo;re doing this &ndash; so let&rsquo;s have a go a practicing with that. The purpose of the exercise is to practice a longer mindfulness of breath, and see<br />\nwhat comes up. If it doesn&rsquo;t sound like that&rsquo;s for you at the moment that&rsquo;s OK, you can always come back to the exercise at a later time.</p>\n\n<p>Remember, as with all of our practices our mindset is one of curiosity. Practice experiencing each breath as a new breath, as if you hadn&rsquo;t felt the one before. Really noticing how it&rsquo;s moving all of your parts of your body. Everyone&#39;s different &ndash; some people find it relaxing, and others notice boredom or irritation, or impatience arising. Sometimes we can feel that sense of wanting to move on to the next moment, wanting it to be over. And these moments are an opportunity to notice that we&rsquo;re having a reaction to the neutralness or indifference of that moment. With mindfulness can we reconnect with our sense of interest and curiosity with this moment, with this breath, and these body sensations?</p>\n',
    type: 'audio',
    file: 'IMG_2021414_83632.mp3',
    thum_img: 'IMG_2021414_83626.jpg',
    created_at: '2021-04-14T08:37:34.000Z',
  },
  {
    id: 35,
    title: 'Grounding Objects',
    description:
      '<p>Grounding objects are another form of sensory grounding. That is, using our senses to ground ourselves in the present moment. Many people find it extremely helpful and reassuring<br />\nto carry a grounding object with them. A grounding object is something tactile for you to feel with your hand. People often carry objects that are pleasant to feel in the hand,<br />\nbut it doesn&rsquo;t necessarily have to be a &lsquo;nice&rsquo; object. Some people carry spiky objects such as pinecones which they find diverting. It is often helpful if the object carries some special<br />\nmeaning for you</p>\n',
    type: 'audio',
    file: 'IMG_2021414_83318.mp3',
    thum_img: 'IMG_2021414_83245.jpg',
    created_at: '2021-04-14T08:33:50.000Z',
  },
  {
    id: 34,
    title: 'Body Scan',
    description:
      '<p>Just like riding a bike, our confidence and skill in mindfulness techniques develops with practice. One of the ways we can practice mindfulness is to place our attention in our bodies. Much of the time, we can be so &lsquo;stuck in our head&rsquo; that we feel disconnected from our bodies, even though they are with us all the time. The body scan exercise helps us learn to feel more connected, by using the body as an anchor for our attention. So the purpose of the body scan is to have an introduction to sensing and feeling, rather than thinking.</p>\n\n<p>During this exercise you can imagine that your attention is a spotlight that illuminates different parts of the body as you shift your focus. As the light shines on a particular<br />\npart, notice the feeling that comes up, whether it&rsquo;s a warmth, a tingling sensation, or even nothing at all. Not so much thinking about what&rsquo;s there, but just feeling it.</p>\n\n<p><br />\nRemember: your attitude in these exercises is to bring an open curiosity and interest. There&rsquo;s no right or wrong, your intention is just to notice whatever is there. And it&rsquo;s OK if<br />\nthere is no particular sensation &ndash; you don&rsquo;t have to go searching or think about it.</p>\n\n<p>This exercise will take about ten to twelve minutes, and you will be guided where to focus<br />\nyour attention throughout. Just feel whatever comes up. Sooner or later your mind will wander; whenever that happens, remember that&rsquo;s OK, and that&rsquo;s normal. If you notice<br />\nsensations that are painful or uncomfortable then at those moments you have a choice about whether to pay attention to parts of your body that feel more comfortable, or to the<br />\ninstructions of the body scan. Take care of what feels OK for you and work within the limits of your own body.</p>\n',
    type: 'audio',
    file: 'IMG_2021414_82513.mp3',
    thum_img: 'IMG_2021414_82510.jpg',
    created_at: '2021-04-14T08:25:30.000Z',
  },
  {
    id: 33,
    title: 'Recovering from a nightmare',
    description:
      '<p>Many people with PTSD have frequent nightmares. These may be of things that actually<br />\nhappened to you, or anxiety dreams about things that could happen. It is common to awake<br />\nfrom nightmares feeling distressed and disoriented. Some people report that they are not<br />\nsure where they are, or whether the trauma is happening again right at that moment.<br />\nObviously this can feel terrifying.</p>\n\n<p><br />\nIn the long run the best way of reducing nightmares in PTSD is to complete a form of<br />\ntreatment that involves &lsquo;reprocessing&rsquo; your trauma memories. There is good evidence that<br />\ntrauma-focused CBT and EMDR are effective for doing this. However, in the short term<br />\nyou need to manage the nightmares as best you can.</p>\n\n<p><br />\nThere are a number of things you can do to help yourself recover from a nightmare. The<br />\nfirst step is to reduce any sense of disorientation. The second step is to reduce your sense<br />\nof threat.</p>\n',
    type: 'video',
    file: 'IMG_2021318_131230.mp4',
    thum_img: 'IMG_2021323_212617.jpg',
    created_at: '2021-01-27T14:32:55.000Z',
  },
  {
    id: 32,
    title: 'Raisin Exercise',
    description:
      '<p><strong>Introduction</strong></p>\n\n<p><br />\nThe raisin exercise is a wonderful introduction to the practice of mindfulness. I won&rsquo;t talk<br />\ntoo much about it, as you&rsquo;ll find that it&rsquo;s more interesting just to have the experience itself.<br />\nI will just say three things.</p>\n\n<p><br />\nThe first is that for this exercise you will need a small item of food. It&rsquo;s most often practiced<br />\nwith a raisin, but it will work equally well with a substitution of another piece of dried<br />\nfruit, a nut, or even a piece of chocolate. Try and find somewhere quiet, where you won&rsquo;t<br />\nbe disturbed.</p>\n\n<p><br />\nThe second is that the purpose of this exercise is to experience something through our<br />\nsenses rather than our thinking mind &ndash; to really taste, smell, and sense the raisin rather<br />\nthan thinking about it.</p>\n\n<p><br />\nThe third is a quick reminder of the &lsquo;mindset&rsquo; or attitude that it&rsquo;s helpful to bring. Pay<br />\nattention to the raisin as though you had never seen or eaten something like this before.<br />\nBringing an interest and curiosity to the experience. Remember, there&rsquo;s no right or wrong,<br />\nand you don&rsquo;t have to like or dislike it. Just be curious and notice what happens.<br />\nWe&rsquo;ll start the exercise in a moment. Feel free to pause this recording while you find a<br />\nsuitable small piece of food.</p>\n',
    type: 'video',
    file: 'IMG_2021318_131338.mp4',
    thum_img: 'IMG_2021323_212627.png',
    created_at: '2021-01-27T14:29:13.000Z',
  },
  {
    id: 31,
    title: 'Being With Difficulty',
    description:
      '<p><strong>Introduction</strong></p>\n\n<p><br />\nWe spend much of our lives in &lsquo;striving&rsquo; or &lsquo;doing&rsquo; mode, and our minds spend time thinking<br />\nor worrying about the future, and dwelling or ruminating on the past.</p>\n\n<p><br />\nOne way that we react to things that are aversive or distressing is to push them away. This<br />\n&lsquo;works&rsquo; for some things in our lives &ndash; think about how you avoid foods you don&rsquo;t like. And<br />\nsometimes we try to do the same with our feelings &ndash; unpleasantness might come up and<br />\nwe try to avoid it. But even if you keep pushing it away, it&rsquo;s like a boomerang and it just<br />\ncomes back. And sometimes that struggle of pushing things away, and being distressed<br />\nthat they don&rsquo;t stay away, can be distressing.</p>\n\n<p><br />\nOne way of thinking about this is to think about the difference between pain and suffering.<br />\nWe can think of the thing we don&rsquo;t like as &lsquo;pain&rsquo; &ndash; and it&rsquo;s understandable and unavoidable<br />\nto experience dislike and &lsquo;pain&rsquo; in our lives. Then we think of the struggle with our pain as<br />\nthe suffering. And the suffering results from &lsquo;trying to get rid of &rsquo; the unpleasant experience.<br />\nOne thing that we&rsquo;re practicing with mindfulness is to ask the question &ldquo;Can we sit<br />\nwith difficulty, and try and bring friendliness and curiosity to it?&rdquo;.</p>\n\n<p><br />\nSo in this exercise, your intention is to spend about ten minutes &lsquo;being with&rsquo; a difficulty.<br />\nWe&rsquo;re going to treat it like an experiment. We&rsquo;re going to take a curious stance: we&rsquo;re<br />\nnot trying to achieve anything. Instead of reacting to the distressing thing in a typical<br />\nunhelpful way, we&rsquo;re going to see how we might be with it in a more friendly way.</p>\n\n<p><br />\nObviously, we don&rsquo;t want to choose something that&rsquo;s a ten out of ten distressing, so perhaps<br />\nchoose a minor disagreement, or something that&rsquo;s been niggling away at you for a while.<br />\nAnd we&rsquo;re going to ask the question &ldquo;what&rsquo;s it like to just be with this?&rdquo;. Remember that<br />\nwe&rsquo;re doing this with friendliness, openness, and curiosity to whatever comes up.</p>\n',
    type: 'video',
    file: 'IMG_2021318_131443.mp4',
    thum_img: 'IMG_2021323_212645.jpg',
    created_at: '2021-01-27T14:24:52.000Z',
  },
  {
    id: 30,
    title: 'Sleep hygiene',
    description:
      '<p>This is not an exercise but will give you information on what sleep specialists think are<br />\nimportant factors in getting a good night&rsquo;s sleep.</p>\n\n<p><br />\nFor very good reasons people with trauma often get into very bad sleep habits &ndash; sleeping<br />\non the couch with the television on, staying awake all night and only sleeping when day<br />\nbreaks, or using alcohol or drugs to sleep.</p>\n\n<p><br />\nHere are some do&rsquo;s and don&rsquo;t&rsquo;s recommended by sleep specialists.</p>\n',
    type: 'video',
    file: 'IMG_2021318_131720.mp4',
    thum_img: 'IMG_2021323_212827.jpg',
    created_at: '2021-01-27T14:21:48.000Z',
  },
  {
    id: 29,
    title: 'Mindfulness Of Sounds And Thoughts',
    description:
      '<p><strong>Introduction</strong></p>\n\n<p><br />\nDo you remember that in the introduction to this collection, we said that sometimes<br />\ndistress comes from getting hooked into thoughts, judgments, and ideas that we have<br />\nabout ourselves and the world? Mindfulness is one way of helping us to learn how to<br />\nunhook from these difficult thoughts and feelings.</p>\n\n<p><br />\nInterestingly, human beings can be really good at unhooking from sounds. Perhaps you&rsquo;ve<br />\nbeen in a busy place, like a caf&eacute;, and tuned out sounds around you when you&rsquo;ve been tuned<br />\nin to a conversation with a friend. It&#39;s only when there&rsquo;s a pause in the conversation that<br />\nyou become aware of all the noise around you.</p>\n\n<p><br />\nEqually, sounds can be really good at hooking us in: imagine you&rsquo;re watching tv and some<br />\npeople start making noise outside. It can be hard, but not impossible, to unhook from that<br />\nnoise.</p>\n\n<p><br />\nThe point is that we can consider sounds &ndash; like thoughts &ndash; as sensations that come and<br />\ngo. Learning to hear sounds as &lsquo;just sounds&rsquo; can help us to experience our thoughts as &lsquo;just<br />\nthoughts&rsquo;. In this exercise, your intention is to spend about 10 minutes noticing sounds and<br />\nthoughts. Like all of our exercises, we&rsquo;re not trying to &lsquo;achieve&rsquo; anything, we&rsquo;re spending<br />\ntime experiencing these sensations. We&rsquo;re not trying to react to them, but rather bringing<br />\na friendly awareness to them. Be open and curious to what you experience, to whatever<br />\ncomes up.</p>\n',
    type: 'video',
    file: 'IMG_2021318_131812.mp4',
    thum_img: 'IMG_2021323_212840.jpg',
    created_at: '2021-01-27T14:18:03.000Z',
  },
  {
    id: 28,
    title: 'Mindfulness in Everyday Life',
    description:
      '<p><strong>Introduction</strong></p>\n\n<p><br />\nNow that you have had some practice with a variety of mindfulness exercises, we want to<br />\nbuild a bridge between your mindfulness practice and your everyday life.</p>\n\n<p><br />\nWhy do we want to make mindful awareness a part of our lives? Most people come to<br />\nmindfulness because we&rsquo;ve struggled in some way &ndash; and because it&rsquo;s normal to struggle at<br />\ntimes in our lives. We spend much of our time on autopilot &ndash; with our minds reaching for,<br />\nor worrying about the future, or dwelling on the past. Mindfulness gives us an alternative<br />\nto being on autopilot. When we bring an awareness, we feel alive. We learn to show up for<br />\nour lives.</p>\n\n<p><br />\nIn this exercise, your intention is to spend just a few minutes or so to do three things:<br />\nfirstly, to notice what&rsquo;s here in this moment, in your thoughts, feelings, and body; and<br />\nthen secondly, focusing your attention on your breath; and then finally, expanding your<br />\nawareness to this moment. And this can be a helpful way of steadying ourselves in the<br />\nmidst of discomfort. This simple exercise is a way of getting out of your head and back into<br />\nyour body, touching the present moment again.</p>\n',
    type: 'video',
    file: 'IMG_2021318_131927.mp4',
    thum_img: 'IMG_2021323_212852.jpg',
    created_at: '2021-01-27T14:02:40.000Z',
  },
  {
    id: 27,
    title: 'Mindful Attention',
    description:
      '<p>Mindful attention is an exercise in which you can train yourself to bring your attention<br />\nback to the present moment. Practicing a mindful attention exercise gives you power<br />\nbecause the more readily you are able to recognize that your mind has wandered, the more<br />\nlikely you are to be able to do something about it.</p>\n',
    type: 'audio',
    file: 'IMG_20201112_8141.mp3',
    thum_img: 'IMG_20201112_12449.jpg',
    created_at: '2020-11-12T08:01:43.000Z',
  },
  {
    id: 26,
    title: 'Combined Relaxation',
    description:
      '<p>We are about to practice a relaxation exercise.</p>\n\n<p><br />\nThis exercise will include elements of relaxed breathing, muscle relaxation, and guided<br />\nimagery. If you have a respiratory problem, or any medical condition that makes you<br />\nconcerned about the suitability of breathing exercises for you, then feel free to skip that<br />\npart if you would like. Similarly, during the muscle relaxation component, if you have any<br />\nphysical injuries then you may wish to skip that part of your body when the exercise gets<br />\nto that point.</p>\n',
    type: 'audio',
    file: 'IMG_20201112_75449.mp3',
    thum_img: 'IMG_20201112_75448.jpg',
    created_at: '2020-11-12T07:54:54.000Z',
  },
  {
    id: 25,
    title: 'A Peaceful place',
    description:
      '<p><span style="font-size:14px">The peaceful place exercise is a way of reminding the brain that everything is safe. Our bodies react strongly to images in our minds. The body reacts to positive imagery too, and so if we deliberately bring about positive imagery we can activate the parasympathetic nervous system and physiologically soothe ourselves.</span></p>\n',
    type: 'audio',
    file: 'IMG_2020617_103150.mp3',
    thum_img: 'IMG_20201112_81256.jpg',
    created_at: '2020-06-17T10:31:59.000Z',
  },
  {
    id: 24,
    title: 'The three minute breathing exercise',
    description:
      '<p><span style="font-size:14px">For many people, due to their busy schedules, spending 20 minutes lying down performing a body scan or focusing on one&rsquo;s breath with the eyes closed can be quite challenging. The Three Minute Breathing Space exercise can be used as an effective practice to integrate mindfulness into daily life. A structural implementation of the exercise can be achieved by using a timer at fixed moments during the day. In this way, the exercise can become automatized. NB: During this exercise, your attention might get distracted by certain thoughts or feelings. Simply notice this. You can decide to observe these thoughts and feelings for a while and then return your attention to your breath or your body. Instructions: The exercise consists of 3 sections (1 minute per section):</span></p>\n\n<p><span style="font-size:14px">1. Awareness: Ask yourself the question: How am I doing right now? Focus your attention on your inner perception. Notice which thoughts, feelings and physical sensations you are experiencing. Try to translate your experiences into words. For example: &ldquo;there are self-critical thoughts&rdquo; or &ldquo;I notice I am tensed&rdquo;. What are you feeling in your body? Allow yourself to feel what you are feeling in the current moment. Accept it. You can tell yourself that it&rsquo;s okay what you&rsquo;re feeling, whatever is there is fine just the way it is.</span></p>\n\n<p><span style="font-size:14px">2. Breathing: Next focus your full attention on your breath. Follow the breathing with your attention.</span></p>\n\n<p><span style="font-size:14px">3. Expansion of attention: Allow your attention to expand to the rest of your body. Feel how your breath moves throughout your whole body. With every in-breath you can feel how your body expands a little and with each out-breath how it shrinks a little.</span></p>\n',
    type: 'image',
    file: 'IMG_2020617_1095.jpg',
    thum_img: 'IMG_2020617_1094.jpg',
    created_at: '2020-06-15T09:16:16.000Z',
  },
  {
    id: 21,
    title: '5 Senses',
    description:
      '<p><span style="font-size:14px">You can relax almost anywhere, provided that you can sit or lie comfortably without being disturbed</span></p>\n',
    type: 'audio',
    file: 'IMG_2020618_181159.mp3',
    thum_img: 'IMG_2020618_181159.jpg',
    created_at: '2020-06-08T19:44:47.000Z',
  },
  {
    id: 18,
    title: 'Relaxed Breathing with balloon imagery',
    description:
      '<p><span style="font-size:14px">The aim of this relaxed breathing exercise is to promote relaxation while staying grounded...</span></p>\n',
    type: 'audio',
    file: 'IMG_2020617_102052.mp3',
    thum_img: 'IMG_2020615_9532.jpg',
    created_at: '2020-05-30T18:21:41.000Z',
  },
];

export default function Exercise() {
  const match = useRouteMatch(ROUTES.EXERCISE_DETAILS_PAGE);
  return (
    <div className="inner_page mb-5">
      {match ? (
        <>
          <h2 className="mb-3 border-bottom other_heading">Exercise</h2>
          <div className="blog-box blog-details">
            <div className="blog-img">
              <img alt="img" />
            </div>
            <div className="details-content">
              <h2>Title</h2>
              <p>Description</p>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2 className="mb-3 border-bottom other_heading">Exercise</h2>
          <div className="row">
            {exercises.map((item) => (
              <div key={item.id} className="col-md-4 col-lg-4 mb-3">
                <div className="blog-box">
                  <div className="blog-img">
                    {item.type === 'audio' ? (
                      <>
                        <img
                          src={`https://syked.co.za/public/uploads/exercise/thumbnail/${item.thum_img}`}
                          alt="poster"
                        />
                        <audio className="audio-tag" controls>
                          <track kind="captions" />
                          <source
                            src={`https://syked.co.za/public/uploads/exercise/${item.file}`}
                            type="audio/mpeg"
                          />
                          Your browser does not support the audio element.
                        </audio>
                      </>
                    ) : (
                      <video
                        className="video-tag"
                        controls
                        poster={`https://syked.co.za/public/uploads/exercise/thumbnail/${item.thum_img}`}>
                        <track kind="captions" />
                        <source
                          src={`https://syked.co.za/public/uploads/exercise/${item.file}`}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    )}
                    {/* <img
                      src={`https://syked.co.za/public/uploads/library/${topic.thum_img}`}
                      alt="img"
                    /> */}
                  </div>
                  <div className="blog-content">
                    <Link to={`/my-account/exercise-detail/${item.id}`}>
                      <h2>{item.title}</h2>
                      {/* eslint-disable-next-line react/no-danger */}
                      <p dangerouslySetInnerHTML={{ __html: item.description }} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
