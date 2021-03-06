import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useRouteMatch } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import * as ROUTES from 'common/constants';

const MenuTabs = withStyles(() => ({
  indicator: {
    backgroundColor: '#bac866',
  },
}))(Tabs);

const MenuTab = withStyles(() => ({
  wrapper: {
    textTransform: 'none',
    fontFamily: 'Roboto Slab',
    fontWeight: 600,
    fontSize: 16,
  },
}))(Tab);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const library = [
  {
    id: 34,
    topic: 'Communication',
    title: 'Communication for conflict-resolution',
    description:
      '<p>In relationships, there are times where there are misunderstandings which if not resolved effectively may lead to anger, resentment or even break-ups. It is therefore, crucial that efforts at resolving the conflict be well planned. Planning how to effectively resolve a conflict with a partner should take into consideration a number of important factors which are as follows:</p>\n\n<ul>\n\t<li>Choosing a time and place when both parties will be free of distractions</li>\n\t<li>Reflect on one&rsquo;s concerns before sharing them</li>\n\t<li>Taking responsibility for one&rsquo;s own role in the conflict</li>\n\t<li>Avoid blaming but share the impact of the conflict</li>\n\t<li>Being cognisant of the language used and tone of voice and what it communicates</li>\n\t<li>Resolving a conflict is not a contest and therefore there&rsquo;s no need for a winner</li>\n\t<li>Ensuring congruence between verbal and non-verbal cues</li>\n\t<li>Listening with empathy and allowing the partner to speak with no interruption</li>\n</ul>\n\n<p>Despite one&rsquo;s best intentions, the discussion may not yield solutions but elicit negative emotions; it is worthwhile to take a timeout and calm down before continuing with the discussion. Once the discussion resumes, a review of the goals helps one to focus on the important issues. Conflict resolution is all about understanding more than defeating. If all attempts fail, seeking the intervention of a mental health care practitioner may be the next step.</p>\n',
    file: 'IMG_202129_9239.jpg',
    thum_img: '',
    type: 'image',
    created_at: '2021-02-09T09:02:39.000Z',
  },
  {
    id: 33,
    topic: 'Communication',
    title: 'Healthy communication in relationships',
    description:
      '<p>Being able to communicate in an effective manner, can help one to develop and maintain lasting and fulfilling relationships. Whilst good communication is beneficial, being a good listener is equally important.</p>\n\n<p>&nbsp;</p>\n\n<p>In relationships, communication should ideally be open and characterised by respect and consideration of the other&rsquo;s feelings. Although necessary, this not automatic but instead requires practice and hard work.</p>\n\n<p>&nbsp;</p>\n\n<p>Two people in a relationship will likely have different communication styles; and the manner in which opinions are shared should take the different styles into consideration. Developing a communication style that suits the needs of the relationship becomes the responsibility of both parties. An agreed way of communicating should be used regardless of the content of discussions.&nbsp; In that way, even communicating a difference in opinion should not leave the other person feeling attacked and devalued.</p>\n\n<p>When the other person receives information that is delivered with empathy, they are more likely to try to meet the needs of the partner. Good communication also keeps two people connected and committed to one another.</p>\n\n<p>&nbsp;</p>\n\n<p>Despite one&rsquo;s intentions though it is important to note that communication will never be perfect all the time but requires constant intentional effort.</p>\n\n<p>&nbsp;</p>\n',
    file: 'IMG_202129_85513.jpg',
    thum_img: '',
    type: 'image',
    created_at: '2021-02-09T08:55:14.000Z',
  },
  {
    id: 32,
    topic: 'Anxiety',
    title: 'What Is Anxiety?',
    description:
      '<p>Anxiety is both a mental and physical state of negative expectation which is often without provocation.</p>\n\n<p><u><strong>When Is Anxiety an Illness?</strong></u></p>\n\n<p>Occasional bouts of anxiety are normal. However, sometimes worry gets out of control. When worries arise with no provocation or are disproportionate to the situation, a diagnosis of an anxiety disorder is often made. When such anxiety consumes too much mental activity or interferes with activities and performance it is seen as a mental illness.</p>\n\n<p>Individuals with such a diagnosis, despite attempts to the contrary, cannot shake their feelings of dread in anticipation of some bad outcome even if they realize that it is unfounded. They often expect things to go wrong.</p>\n\n<p>Their anxiety also impacts them physiologically, where they are often in a state of agitation, struggle to fall or stay asleep. They may even have headaches, palpitations, hot flushes, trembling, light-headedness, or fatigue.</p>\n\n<h2>&nbsp;</h2>\n\n<h2><strong><u>Children and Anxiety</u></strong></h2>\n\n<p>Anxiety disorders are also present in children. Often, their first worries revolve around separation from their caregivers. They also worry about any of a number of things that they cannot control. Such worries will interfere with their sleep, school performance and emotionally they struggle to contain themselves.</p>\n\n<p><u><strong>Causes of anxiety</strong></u></p>\n\n<p>The origin of anxiety disorders is complex as it can result from a number of influences which may include genetic, behavioural, environmental, and developmental factors.</p>\n\n<p><u><strong>Treatment of anxiety</strong></u></p>\n\n<p>Medication and psychotherapy are usually recommended in helping individuals to learn how to deal with their anxiety symptoms.</p>\n',
    file: 'IMG_202129_8483.jpg',
    thum_img: '',
    type: 'image',
    created_at: '2021-02-09T08:48:03.000Z',
  },
  {
    id: 31,
    topic: 'Emotions',
    title: 'A guide to our emotions',
    description:
      '<p><strong>Q</strong>: Why do we have emotions?</p>\n\n<p><strong>A</strong>: Emotions motivate us, they make us want to do things</p>\n\n<p>Our emotions help to guide the decisions that we make every minute of our lives. The world around us (and the thoughts in our heads) trigger emotional reactions all the time. Much of what we do is motivated by a desire to change or maintain a feeling-state &ndash; to hold on to good feelings or to avoid bad feelings.</p>\n\n<p>Emotions make us want to act, and different emotions guide us towards different kinds of actions.</p>\n\n<p><strong>Emotions as problems</strong></p>\n\n<p>In some ways it is odd to think of emotions as being a problem. After all, it is a normal human experience to feel them, and they are often a good guide to what we need to do. Feeling nervous can make us take care, feeling guilty can guide us to repair any damage we may have caused, and feeling that we have fallen out of love can guide us to end an unhappy relationship. Emotions can cause us to<strong>&nbsp;<em>suffer</em></strong>&nbsp;though, and that is when we see them as being problematic.</p>\n\n<p><strong>When are emotions a problem?</strong></p>\n\n<p>Some people prefer to view emotions as a guide rather than a problem. When they are feeling something strong, they might ask&nbsp;<em>&ldquo;What is this feeling telling me to do?&rdquo;, or &ldquo;What does my heart (or gut) tell me?&rdquo;</em>. With the proviso that we are not saying anything is &lsquo;wrong&rsquo; with having emotions, psychologists have some &lsquo;rules of thumb&rsquo; about when emotions can become problematic:</p>\n\n<p><strong>Strong feelings go on for too long</strong></p>\n\n<p>For example, when the (normal) &lsquo;baby blues&rsquo; after giving birth turn into post-natal depression. Or when (normal) strong feelings of grief persist for many years after the loss of a loved one.</p>\n\n<p><strong>They interfere with our ability to live our lives</strong></p>\n\n<p>For example, feeling so anxious that we are scared to leave the house or meet people. Or feeling so sad and demotivated that we can&rsquo;t be bothered to do anything at all.</p>\n\n<p><strong>They are out of proportion to what most other people would feel in that situation</strong></p>\n\n<p>For example, a certain amount of shyness is normal but some people feel such paralyzing anxiety when they are around other people that it is labelled &lsquo;social anxiety disorder&rsquo; (and can be successfully treated).</p>\n\n<p>After a traumatic event it is common to feel &lsquo;wary&rsquo; and &lsquo;on guard&rsquo;, but some people who develop a condition called post-traumatic stress disorder (PTSD) experience extreme fear that may persist for many years.</p>\n\n<p>&nbsp;</p>\n',
    file: 'IMG_2021125_101433.jpg',
    thum_img: '',
    type: 'image',
    created_at: '2021-01-25T10:14:34.000Z',
  },
  {
    id: 30,
    topic: 'Emotions',
    title: 'Understanding emotions',
    description:
      '<p>Another way of thinking about the effects of emotions is to sort them into problems of &lsquo;too much&rsquo;, &lsquo;too little&rsquo;, and &lsquo;too difficult to control&rsquo;:</p>\n\n<p><strong>When we feel too much</strong></p>\n\n<ul>\n\t<li>We might feel too scared in certain situations, or when confronted with certain things. Sometimes this is labelled anxiety or phobia.</li>\n\t<li>We might feel scared by what is going on in our own minds, or what we think we might do. Sometimes this is labelled obsessive compulsive disorder (OCD).</li>\n\t<li>We might worry what other people will think of us, or how they will react. This can be labelled shame or as social anxiety.</li>\n</ul>\n\n<p><strong>When we feel too little</strong></p>\n\n<ul>\n\t<li>We might find it difficult to feel pleasure, or we might feel hopeless and lack the motivation to do anything. Depression can be associated with feeling &lsquo;numb&rsquo; or not feeling the right amount of emotion.</li>\n\t<li>Some people who have experienced significant trauma feel &lsquo;numb&rsquo; or &lsquo;detached&rsquo; from their emotions. This is a common symptom in survivors of trauma who struggle with post-traumatic stress disorder (PTSD).</li>\n\t<li>Some people who feel emotionally numb can act in quite impulsive ways in an effort to feel something. The lack of emotion can lead to problematic (and sometimes dangerous) ways of behaving.</li>\n\t<li>Some people who develop psychosis can experience symptoms of &lsquo;flat affect&rsquo; or feel &lsquo;emotionally blunted&rsquo;.</li>\n</ul>\n\n<p><strong>When we can&rsquo;t regulate our emotions effectively</strong></p>\n\n<ul>\n\t<li>Some people have moods that cycle between &lsquo;highs&rsquo; where they feel on top of the world (and which often leads to them making irrational decisions) and periods of &lsquo;lows&rsquo; where they experience severe depression. This pattern is often seen in people who suffer from bipolar affective disorder.</li>\n\t<li>Some people switch very rapidly from feeling quite numb and detached, to feeling strong surges of emotion. This is sometimes called a problem of emotion regulation.</li>\n\t<li>Some people develop unhealthy ways of managing their emotional states. Examples include people who have developed eating disorders such as anorexia or bulimia, or people who self-harm or use substances as ways of managing their emotions.</li>\n</ul>\n\n<p>&nbsp;</p>\n',
    file: 'IMG_2021125_10944.jpg',
    thum_img: '',
    type: 'image',
    created_at: '2021-01-25T10:09:44.000Z',
  },
  {
    id: 29,
    topic: 'Emotions',
    title: 'Ways of managing strong emotions.',
    description:
      '<p>If you are feeling overwhelmed or are losing control of your emotions, you could try one (or a few) of the following ways to help yourself:</p>\n\n<p><strong>Shift your focus of attention</strong></p>\n\n<ul>\n\t<li>Change your environment. Go for a walk, go somewhere new</li>\n\t<li>Watch a movie, tv show, or a funny video on the internet</li>\n\t<li>Do something practical. Can you find anything that needs cleaning, painting, or fixing? Do it now</li>\n\t<li>Read a book</li>\n</ul>\n\n<p><strong>Process your feelings</strong></p>\n\n<ul>\n\t<li>Speak to someone about how you are feeling</li>\n\t<li>Write about how you are feeling (keep a journal or you could write it in a letter to someone, you don&rsquo;t have to post it)</li>\n\t<li>Draw a picture to represent how you are feeling right now</li>\n\t<li>Scream into a pillow</li>\n</ul>\n\n<p><strong>Work with your body</strong></p>\n\n<ul>\n\t<li>Try a relaxed breathing exercise</li>\n\t<li>Try a progressive muscle relaxation</li>\n\t<li>Do some physical exercise</li>\n</ul>\n\n<p style="margin-left:36.0pt">&bull; it can increase your energy levels &nbsp;and mental alertness</p>\n\n<p style="margin-left:36.0pt">&bull; it can help you to sleep better therefore leaving you more calm</p>\n\n<p style="margin-left:36.0pt">&bull; go for a run, swim, brisk walk, or do some yoga or stretching</p>\n\n<p>When your own efforts do not work, consulting a mental health care practitioner would be best so you can be assisted with identifying your emotional difficulties and learning more effective ways to manage them.</p>\n\n<p>&nbsp;</p>\n\n<p>&nbsp;</p>\n',
    file: 'IMG_2021125_10453.jpg',
    thum_img: '',
    type: 'image',
    created_at: '2021-01-25T10:04:54.000Z',
  },
  {
    id: 28,
    topic: 'Depression',
    title: 'What is depression?',
    description:
      '<p>Depression&nbsp;is a low mood that lasts for a significant amount of time.</p>\n\n<p>The severity of depression can vary: a mild depression might not stop you from doing your normal activities, although it can make them harder to do and things might not feel worthwhile. When depression is more severe it can leave you feeling suicidal and unable to function normally.</p>\n\n<p>Depression can have many causes &ndash; for some people there are clear triggers, but others can find it difficult to understand why they are depressed. Fortunately, there are effective psychological and medical treatments for depression.</p>\n\n<p>Some of the signs and symptoms that you may experience if you are depressed include:</p>\n\n<ul>\n\t<li>Feeling depressed or down for most of the day, nearly every day.</li>\n\t<li>Less interest in things that you previously found interesting.</li>\n\t<li>Feeling fatigued or a loss of energy.</li>\n\t<li>Sleeping too much or too little.</li>\n\t<li>Feeling worthless, being hard on yourself, or feeling guilty.</li>\n\t<li>Feeling unable to concentrate or feeling indecisive.</li>\n\t<li>Recurrent thoughts of death or suicide, suicidal behaviour, or self-harm.</li>\n\t<li>Eating too little or too much.</li>\n\t<li>Feeling so fidgety that you can&rsquo;t sit still or moving and speaking more slowly than normal.</li>\n\t<li>&nbsp;</li>\n</ul>\n\n<p>Some people have a once-off episode and recover whilst other people experience many episodes of depression throughout their life.</p>\n\n<p>&nbsp;</p>\n',
    file: 'IMG_2021125_1014.jpg',
    thum_img: '',
    type: 'image',
    created_at: '2021-01-25T10:01:05.000Z',
  },
  {
    id: 27,
    topic: 'Depression',
    title: 'What causes depression?',
    description:
      '<p>There is no single cause for depression. Some of the factors that make it more likely that you will experience depression include:</p>\n\n<ul>\n\t<li><strong>Critical incidents which kick-start the depression.&nbsp;</strong>These can include&nbsp;losses&nbsp;(e.g.&nbsp;bereavement, the end of a relationship, losing a job, children leaving home), transitions (e.g. leaving home, retiring, having a baby), physical illness, loneliness, or any other significant or stressful events.</li>\n\t<li><strong>A tendency to think negatively.&nbsp;</strong>More than just a pessimistic attitude, this is an automatic &lsquo;habit&rsquo; of seeing the worst in things (&ldquo;glass-half-empty thinking&rdquo;).</li>\n\t<li><strong>Early experiences which made you vulnerable to depression.&nbsp;</strong>These can include abuse, neglect, bullying, poor relationships, living with a parent who was depressed or had emotional difficulties, or losses.</li>\n\t<li><strong>Holding&nbsp;unhelpful beliefs and assumptions.&nbsp;</strong>For example,&nbsp;<em>&ldquo;unless I succeed in all areas, I am worthless&rdquo;</em>,&nbsp;<em>&ldquo;I should be happy all the time&rdquo;</em>,&nbsp;<em>&ldquo;I can&rsquo;t be happy unless I am loved&rdquo;.&nbsp;</em>These are often closely related to our early experiences (see above).</li>\n\t<li><strong>Genetic factors.&nbsp;</strong>There may be genes which predispose people to developing emotional problems in general.</li>\n</ul>\n\n<p>When you are depressed it can be as though your motivation works in reverse &ndash; you need to get active before you feel good again. An effective way of breaking this vicious cycle of depression is to increase your level of activity&nbsp;<em>even if you don&rsquo;t feel like it to begin with</em>.</p>\n\n<p>&nbsp;</p>\n',
    file: 'IMG_2021125_95720.jpg',
    thum_img: '',
    type: 'image',
    created_at: '2021-01-25T09:57:20.000Z',
  },
  {
    id: 26,
    topic: 'Depression',
    title: 'Treatments for depression:',
    description:
      '<p>The experience of depression generally varies from one person to the next with the causes also being different, the treatment thereof will inevitably also be different. Consulting a mental health care practitioner will allow you to get an expert opinion on what treatment would be suitable for you based on amongst other factors, your symptom presentation and background history.</p>\n\n<p>Treatment can include therapy or counselling support or medication and at times a combination may be ideal.</p>\n\n<p><strong>Self-care methods that you can adopt to improve your mood:</strong></p>\n\n<p>While you may not have a diagnosis of depression, maintaining a positive mood requires intentional self-care on your part.</p>\n\n<p>There are a number of things that you can do for yourself and these include:</p>\n\n<ul style="margin-left:40px">\n\t<li>\n\t<p>&nbsp;Monitor your daily activities&nbsp;to understand the relationship between your activities and your mood.</p>\n\t</li>\n\t<li>\n\t<p>Identify your&nbsp;values&nbsp;and goals to work out what really matters to you and what direction you want your life to go in.</p>\n\t</li>\n\t<li>\n\t<p>Scheduling and carrying out meaningful activities&nbsp;to boost your experiences of pleasure, mastery, and achievement.</p>\n\t</li>\n\t<li>\n\t<p>Employing focused problem-solving skills to ensure that you stay on course.</p>\n\t</li>\n\t<li>\n\t<p>Changing the way you view and think about life situations by:&nbsp;</p>\n\n\t<ul>\n\t\t<li>\n\t\t<p>Identifying any negative thoughts that you are prone to</p>\n\t\t</li>\n\t\t<li>\n\t\t<p>Examining these thoughts to see how realistic they are and how they impact your mood</p>\n\t\t</li>\n\t\t<li>\n\t\t<p>Exploring your more deeply held beliefs and assumptions so you can understand why you are prone to thinking and acting in ways that negatively impact your mood</p>\n\t\t</li>\n\t\t<li>\n\t\t<p>Change any&nbsp;dysfunctional beliefs and assumptions which are holding you back.</p>\n\t\t</li>\n\t</ul>\n\t</li>\n\t<li>\n\t<p>Learn mindfulness practices</p>\n\t</li>\n</ul>\n',
    file: 'IMG_2021120_125914.jpg',
    thum_img: '',
    type: 'image',
    created_at: '2021-01-20T12:59:17.000Z',
  },
  {
    id: 25,
    topic: 'Anxiety',
    title: 'Living with worry and anxiety amidst global uncertainty',
    description:
      '<p><span style="font-size:14px">Our world is changing rapidly at the moment. Given some of the news coverage, it would be hard not to worry about what it all means for yourself, and for those you love. Worry and anxiety&nbsp;are common problems at the best of times, and when it takes over, it can become all-encompassing.</span></p>\n\n<p><span style="font-size:14px"><strong>What is worry?</strong></span></p>\n\n<p><span style="font-size:14px">Human beings have the amazing ability to think about future events. &lsquo;Thinking ahead&rsquo; means that we can anticipate obstacles or problems, and gives us the opportunity to plan solutions. For example, hand washing and social distancing are helpful things that we can decide to do in order to prevent the spread of the virus. However, worrying is a way of &lsquo;thinking ahead&rsquo; that often leaves us feeling anxious or apprehensive. When we worry excessively, we often think about worst case scenarios and feel that we won&rsquo;t be able to cope.</span></p>\n',
    file: 'IMG_2020623_211651.jpg',
    thum_img: '',
    type: 'image',
    created_at: '2020-06-23T21:17:04.000Z',
  },
  {
    id: 24,
    topic: 'Anxiety',
    title: 'How to cope with worry',
    description:
      '<p><span style="font-size:14px">It is natural for you to worry at the moment, but if you feel that it&rsquo;s becoming excessive and taking over your life &ndash; for example if it&rsquo;s making you anxious, or if you&rsquo;re stuggling to sleep &ndash; then it might be worth trying to find ways to limit the time you spend worrying, and taking steps to manage your well-being. Included is a selection of tips that can help you maintain your well-being and manage your worry. These can help you to:</span></p>\n\n<ul>\n\t<li><span style="font-size:14px"><strong>Maintain balance in your life.</strong> Psychologists think that well-being comes from living a life with a balance of activities that give you feelings of pleasure, achievement, and closeness. Remember that we&rsquo;re social animals &ndash; we need connections to thrive and flourish. We would recommend trying to do at least some activities that are social and involve other people. In times like these you might have to find some creative ways to do social things at a distance. For example, by keeping in touch online or by phone.</span></li>\n\t<li><span style="font-size:14px"><strong>Practice identifying whether your worry is &lsquo;real problem&rsquo; worry, or &lsquo;hypothetical worry&rsquo;.</strong>&nbsp; If you&rsquo;re experiencing lots of hypothetical worry, then it&rsquo;s important to remind yourself that your mind is not focusing on a problem that you can solve right now, and then to find ways to let the worry go and focus on something else.</span></li>\n\t<li><span style="font-size:14px"><strong>Practice postponing your worry.</strong> Worry is insistent &ndash; it can make you feel as though you have to engage with it right now. But you can experiment with postponing hypothetical worry. In practice, this means deliberately setting aside time each day to let yourself worry (e.g. 30 minutes at the end of each day). It can feel like an odd thing to do at first! It also means that for the other 23.5 hours in the day you try to let go of the worry until you get to your &lsquo;worry time&rsquo;.</span></li>\n\t<li><span style="font-size:14px"><strong>Practice mindfulness.</strong> Learning and practicing mindfulness&nbsp;can help us to let go of worries and bring ourselves back to the present moment.</span></li>\n</ul>\n\n<p><span style="font-size:14px"><strong>Final tips to help manage anxiety or worry</strong></span></p>\n\n<ul>\n\t<li><span style="font-size:14px"><strong>Set a routine.</strong> If you are spending more time at home it is important to continue with a regular routine.</span></li>\n\t<li><span style="font-size:14px"><strong>Stay mentally and physically active.</strong> When you plan your daily timetable have a go at including activities that keep both your mind and body active.</span></li>\n\t<li><span style="font-size:14px"><strong>Practice gratitude.</strong> At times of uncertainty, developing a gratitude practice can help you to connect with moments of joy, aliveness, and pleasure. At the end of each day take time to reflect on what you are thankful for today.</span></li>\n\t<li><span style="font-size:14px"><strong>Notice and limit worry triggers.</strong> As the health situation develops it can feel like we need to constantly follow the news or check social media for updates. However, you might notice this also triggers your worry and anxiety. Try to limit the time that you are exposed to worry triggers each day.</span></li>\n\t<li><span style="font-size:14px"><strong>Rely on reputable news sources.</strong> It can also help to be mindful of where you are obtaining news and information. Be careful to choose reputable sources.</span></li>\n</ul>\n\n<p>&nbsp;</p>\n',
    file: 'IMG_2020623_21754.jpg',
    thum_img: '',
    type: 'image',
    created_at: '2020-06-23T21:07:59.000Z',
  },
  {
    id: 23,
    topic: 'Alcohol Abuse',
    title: 'How to manage your drinking during a global health crisis',
    description:
      '<p><span style="font-size:14px">You may have noticed that you have started to drink more as global events have unfolded. It has been an unsettling time, and it&#39;s only natural to try and find ways to cope with stress and make yourself feel better:</span></p>\n\n<p><span style="font-size:14px"><strong>Lockdown pressures and drinking:</strong></span></p>\n\n<p><span style="font-size:14px">In the current circumstances most of us are staying home and missing socialising with friends and family. It has also been an incredibly unsettling time, and many of us have had times over the past few weeks when we have felt worried and anxious, or lonely and sad. The pandemic has affected people in different ways too. It can be hard enough trying to manage alcohol use at the best of times, and if you&rsquo;ve found yourself drinking more than usual, try not to give yourself such a hard time. The fact you are reading this article means you want to do something about it, which is a step in the right direction.</span></p>\n',
    file: 'IMG_2020623_203355.jpg',
    thum_img: 'IMG_2020623_203615.jpg',
    type: 'image',
    created_at: '2020-06-23T20:34:01.000Z',
  },
  {
    id: 22,
    topic: 'Alcohol Abuse',
    title: 'How do I know if I need to reduce my drinking?',
    description:
      '<p>If you are drinking above the recommended limit, then it&rsquo;s a good idea to look at your drinking habits and find ways to reduce to the healthy limit. Even if you are drinking within the limit, there may also be other signs that you need to change your drinking habits. Warning signs include:</p>\n\n<ol>\n\t<li>Binge drinking, even if you stay within the weekly limit.</li>\n\t<li>Having a drink to manage your emotions</li>\n\t<li>Drinking most days, even when you stay within the weekly limit.</li>\n</ol>\n',
    file: 'IMG_2020623_201819.jpg',
    thum_img: '',
    type: 'image',
    created_at: '2020-06-23T20:18:26.000Z',
  },
  {
    id: 21,
    topic: 'Alcohol Abuse',
    title: 'What can I do to reduce my drinking?',
    description:
      '<ul>\n\t<li>If you are not physically dependent but are worried that your drinking has started to increase. Then have a go at trying some of the following ideas:</li>\n\t<li>Keep an alcohol diary &ndash; there are many apps you can use to record your drinking and calculate how many units of alcohol you are currently drinking.</li>\n\t<li>Plan and decide how much you will drink over the coming week, set yourself a limit.</li>\n\t<li>Plan at least 2 or 3 alcohol-free days and plan for treats for your alcohol-free days.</li>\n\t<li>Plan a routine for each day and include things that give you a sense of purpose</li>\n\t<li>Delay drinking to the evenings e.g. drinking after 6pm.</li>\n\t<li>Involve a friend or family member who can hold you accountable.</li>\n\t<li>Some organizations are running online support groups during the lockdown, connect.</li>\n\t<li>Start to measure your drinks.</li>\n\t<li>Keep the alcohol out of reach, so it doesn&rsquo;t tempt you during the day.</li>\n\t<li>Try and drink lower strength alcohol or use mixers to dilute your drinks.</li>\n\t<li>Keep hydrated by drinking enough water throughout the day.</li>\n\t<li>Slow it down, before the alcoholic drink try and start with a soft drink or water.</li>\n\t<li>Try not to stockpile too much alcohol,</li>\n</ul>\n\n<p><strong>COMMON CHALLENGES PEOPLE EXPERIENCE WHEN THEY REDUCE THEIR DRINKING:</strong></p>\n\n<ol>\n\t<li>1.Managing cravings and urges</li>\n\t<li>2. Feeling hopeless and unmotivated</li>\n\t<li>3.Struggling to manage emotions</li>\n</ol>\n\n<p>These are difficult times and it is natural to want some comfort and ease in the midst of all the uncertainty. It&rsquo;s difficult to change drinking habits at the best of times, so be gentle with yourself. Try and make small changes and set achievable and realistic goals.</p>\n',
    file: 'IMG_2020623_194748.jpg',
    thum_img: '',
    type: 'image',
    created_at: '2020-06-23T19:47:51.000Z',
  },
  {
    id: 20,
    topic: 'Mindfulness',
    title: 'What is mindfulness?',
    description:
      '<p>Mindfulness is defined as &ldquo;the awareness that emerges through paying attention on purpose, in the present moment, and non-judgmentally to the unfolding of experience moment by moment&rdquo;. In other words, mindfulness involves directing attention to the experience in the present moment and a non-evaluative observation of that experience.</p>\n\n<p><strong>INFORMAL EXERCISES</strong></p>\n\n<p>Mindfulness interventions also involve informal exercises that aim to enhance mindful awareness during everyday activities. They require a single focus of attention and the ability to gently turn back to the object of attention following distraction. The object of attention can be anything, ranging from a conversation with a colleague to eating lunch. We predict that these exercises are particularly useful when attempting to integrate mindfulness at the workplace because they do not necessarily require additional time or environmental changes. Note that there are virtually endless examples of informal practices, which makes it impossible to list and describe them all. We have attempted to categorize the most important informal exercises and briefly explain them in the context of work.</p>\n',
    file: 'IMG_2020622_205523.jpg',
    thum_img: '',
    type: 'image',
    created_at: '2020-06-22T20:55:24.000Z',
  },
  {
    id: 19,
    topic: 'Mindfulness',
    title: 'Awareness during social interaction',
    description:
      '<p>Practicing mindfulness in a social context involves interacting with the other person(s) as a single point of focus. Instead of multi-tasking during a conversation with a colleague or thinking about what to say next, attention is paid to the current conversation. In contrast to identifying with one&rsquo;s own assumptions and reacting impulsively, mindfulness requires an open, non-judgemental attitude during the conversation&nbsp;characterized by deep listening, perspective&nbsp; taking, and allowing the other to respond. Moreover, mindfulness during social interaction can involve speaking with awareness. Examples include pausing before speaking, monitoring one&rsquo;s thoughts, and considering the effect of speaking them out loud. Practicing awareness during social interaction is an exercise that can easily be implemented into one&rsquo;s everyday life.</p>\n',
    file: 'IMG_2020615_102853.jpg',
    thum_img: '',
    type: 'image',
    created_at: '2020-06-15T10:28:54.000Z',
  },
  {
    id: 18,
    topic: 'Mindfulness',
    title: 'Awareness of impulsive and reactive patterns',
    description:
      '<p>Many daily patterns of thinking and behaviour are habitual (unconscious) reactions to experiences or events. Failing to perform well may immediately trigger negative self-critical thoughts and judgments. The experience of sadness can result in a direct attempt to push away the unwanted feeling. Receiving a snide remark from a colleague may cause one to raise the voice and say things that he/she might regret afterwards. In all these examples, automatic patterns guide the behaviour. Mindfulness requires awareness of these experiences as they arise during the day.</p>\n\n<p>While it may be difficult to become aware of these experiences before the onset of an impulsive reaction, becoming aware of them afterwards can also be beneficial because it may enhance detection of similar patterns in the future.</p>\n',
    file: 'IMG_2020615_102712.jpg',
    thum_img: '',
    type: 'image',
    created_at: '2020-06-15T10:27:14.000Z',
  },
  {
    id: 17,
    topic: 'Mindfulness',
    title: 'Body awareness',
    description:
      '<p>The awareness of the body can be implemented in daily life by paying attention to the body regularly throughout the day in various circumstances. One can pay attention to the posture and become aware of physical sensations, such as pain or tension.</p>\n\n<p>Jobs requiring lifting, monotonous work tasks, uncomfortable work postures, repetitive movements, and prolonged periods at computer terminals have been found to be associated with physical problems, such as neck/back pain and occupational repetitive strain injuries. Mindful awareness of these sensations is likely to enhance early detection and prevention of physical complaints. One can, for instance, implement daily moments of mindful awareness by setting an alarm at random intervals to disrupt repetitive movements or become aware of one&rsquo;s posture.</p>\n',
    file: 'IMG_2020615_102445.jpg',
    thum_img: '',
    type: 'image',
    created_at: '2020-06-15T10:24:45.000Z',
  },
  {
    id: 16,
    topic: 'Mindfulness',
    title: 'Awareness of routine activities',
    description:
      '<p>Routine activities are activities performed regularly, often daily. Most routine activities require little conscious attention because they are highly automatized. Examples include taking a shower, driving or walking to the workplace, or consuming lunch. The idea is to focus attention fully on the activity; the body movements, the sight, the sensations. When thoughts or other distractions emerge, one notices them and brings back attention to the task at hand. For instance, when eating mindfully, one eats slowly, directing attention mainly to the experience in the present moment, which includes physical movements, the taste and smell of the food, and the like. Thus, rather than doing multiple things at the same time (such as reading while eating, talking on the phone while driving home, thinking about work while taking a shower), one adopts a single focus of attention.</p>\n\n<p>As part of mindfulness training programs, participants are encouraged to pick a few of these routine activities and to practice performing them in a mindful way. Since it is not time-consuming and involves activities that are performed daily, this exercise can easily be implemented into one&rsquo;s workday. Participants may pick activities, such as being mindful while having lunch, being mindful while walking to the copy machine, or being mindful while driving home from work.</p>\n',
    file: 'IMG_2020615_101216.jpg',
    thum_img: 'IMG_2020615_101217.jpg',
    type: 'image',
    created_at: '2020-06-15T09:41:51.000Z',
  },
  {
    id: 5,
    topic: 'Communication',
    title: 'Effective Commuinication',
    description:
      '<p>Effective communication is about more than just exchanging information. It&rsquo;s about understanding the emotion and intentions behind the information. As well as being able to clearly convey a message, you need to also listen in a way that gains the full meaning of what&rsquo;s being said and makes the other person feel heard and understood.</p>\n\n<p>Effective communication sounds like it should be instinctive. But all too often, when we try to communicate with others something goes astray. We say one thing, the other person hears something else, and misunderstandings, frustration, and conflicts ensue. This can cause problems in your home, school, and work relationships.</p>\n\n<p>For many of us, communicating more clearly and effectively requires learning some important skills. Whether you&rsquo;re trying to improve communication with your spouse, kids, boss, or coworkers, learning these skills can deepen your connections to others, build greater trust and respect, and improve teamwork, problem solving, and your overall social and emotional health.</p>\n',
    file: 'IMG_2020615_95930.png',
    thum_img: 'IMG_2020615_95931.png',
    type: 'image',
    created_at: '2020-04-21T11:40:50.000Z',
  },
];

function groupByData(key, array) {
  const result = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < array.length; i++) {
    let added = false;
    // eslint-disable-next-line no-plusplus
    for (let j = 0; j < result.length; j++) {
      if (result[j][key] === array[i][key]) {
        result[j].items.push(array[i]);
        added = true;
        break;
      }
    }
    if (!added) {
      const entry = { items: [] };
      entry[key] = array[i][key];
      entry.items.push(array[i]);
      result.push(entry);
    }
  }
  return result;
}

export default function Library() {
  const [value, setValue] = React.useState(0);
  const match = useRouteMatch(ROUTES.LIBRARY_DETAILS_PAGE);

  useEffect(() => {
    if (match) {
      // call /v1/customer/libraries/:id
      // const { id } = match.params;
      // console.log(parseFloat(id));
    }
  }, [match]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const topics = groupByData('topic', library);

  return (
    <>
      {/* <div className="loader">
        <img src="syked/assets/img/loader.svg" alt="loader" />
      </div> */}
      <div className="inner_page mb-5">
        {match ? (
          <>
            <h2 className="mb-3 border-bottom other_heading">Communication</h2>
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
            <h2 className="mb-3 border-bottom other_heading">Library</h2>
            <MenuTabs
              indicatorColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              value={value}
              onChange={handleChange}
              aria-label="simple tabs">
              {topics.map((item, index) => (
                <MenuTab key={item.topic} label={item.topic} {...a11yProps(index)} />
              ))}
            </MenuTabs>
            {topics.map((topic, index) => (
              <TabPanel key={topic.topic} value={value} index={index}>
                <div className="row">
                  {topics[value].items.map((item) => (
                    <div key={item.id} className="col-md-4 col-lg-4 mb-3">
                      <div className="blog-box">
                        <div className="blog-img">
                          <img
                            src={`https://syked.co.za/public/uploads/library/${topic.thum_img}`}
                            alt="img"
                          />
                        </div>
                        <div className="blog-content">
                          <Link to={`/my-account/library-detail/${item.id}`}>
                            <h2>{item.title}</h2>
                            {/* eslint-disable-next-line react/no-danger */}
                            <p dangerouslySetInnerHTML={{ __html: item.description }} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </>
        )}
      </div>
    </>
  );
}
